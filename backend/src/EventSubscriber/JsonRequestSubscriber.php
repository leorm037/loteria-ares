<?php

namespace App\EventSubscriber;

use App\Exception\TipoException;
use DateTime;
use Psr\Log\LoggerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpKernel\Event\RequestEvent;
use Symfony\Component\HttpKernel\KernelEvents;

class JsonRequestSubscriber implements EventSubscriberInterface
{

    public function __construct(
            private LoggerInterface $logger,
            private RequestStack $requestStack
    )
    {
        
    }

    public function onKernelRequest(RequestEvent $event): void
    {
        if (in_array($event->getRequest()->getMethod(), ['POST', 'PUT', 'PATCH'])) {
            $this->validar($event);
        }
    }

    private function validar(RequestEvent $event): void
    {
        if ($event->getRequest()->getContentTypeFormat() != 'json') {
            $request = $this->requestStack->getCurrentRequest();
            $host = $request ? $request->getSchemeAndHttpHost() : 'http://192.168.0.2/loteria';

            $this->logger->error("Requisição em formato inválido");

            $data = [
                'type' => "{$host}/problems",
                'title' => "Requisição recebida em formato inválido",
                'status' => 400,
                'detail' => ["A requisição deve ter Content-Type: application/json."],
                'timestamp' => (new DateTime())->format(DateTime::ATOM)
            ];

            $response = new JsonResponse($data);
            $response->headers->set('Content-Type', 'application/problem+json');
            $response->setStatusCode($data['status']);

            $event->setResponse($response);
        }
    }

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::REQUEST => 'onKernelRequest',
        ];
    }
}
