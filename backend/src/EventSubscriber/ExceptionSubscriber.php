<?php

namespace App\EventSubscriber;

use App\Exception\LoteriaException;
use DateTime;
use Psr\Log\LoggerInterface;
use Symfony\Component\EventDispatcher\EventSubscriberInterface;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\RequestStack;
use Symfony\Component\HttpKernel\Event\ExceptionEvent;
use Symfony\Component\HttpKernel\KernelEvents;

class ExceptionSubscriber implements EventSubscriberInterface
{

    public function __construct(
            private LoggerInterface $logger,
            private RequestStack $requestStack
    )
    {
        
    }

    public function onKernelException(ExceptionEvent $event): void
    {
        /** @var LoteriaException | Exception $exception */
        $exception = $event->getThrowable();

        $statusCode = ($exception->getCode() === 0) ? 500 : $exception->getCode();

        $request = $this->requestStack->getCurrentRequest();
        $host = $request ? $request->getSchemeAndHttpHost() : 'http://192.168.0.2/loteria';

        $this->logger->error($exception->getMessage(), [
            'exception' => $exception
        ]);

        $data = [
            'type' => "{$host}/problems",
            'title' => method_exists($exception, "getTitle") ? $exception->getTitle() : $exception->getMessage(),
            'code' => $exception->getCode(),
            'detail' => $exception->getMessage(),
            'timestamp' => (new DateTime())->format(DateTime::ATOM)
        ];

        $response = new JsonResponse($data);
        $response->headers->set('Content-Type', 'application/problem+json');
        $response->setStatusCode($statusCode);

        $event->setResponse($response);
    }

    public static function getSubscribedEvents(): array
    {
        return [
            KernelEvents::EXCEPTION => 'onKernelException',
        ];
    }
}
