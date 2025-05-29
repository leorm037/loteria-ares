<?php

$header = <<<EOF
This file is part of Loteria.

(c) Leonardo Rodrigues Marques <leonardo@rodriguesmarques.com.br>

This source file is subject to the MIT license that is bundled
with this source code in the file LICENSE.
EOF;

$finder = (new PhpCsFixer\Finder())
        ->in(__DIR__)
        ->exclude('var')
;

return (new PhpCsFixer\Config())
                ->setUsingCache(false)
                ->setParallelConfig(PhpCsFixer\Runner\Parallel\ParallelConfigFactory::detect())
                ->setRules([
                    '@PSR12' => true,
                    'header_comment' => [
                        'header' => $header,
                        'location' => 'after_open',
                        'separate' => 'both'
                    ],
                    '@Symfony' => true,
                ])
                ->setFinder($finder)
;
