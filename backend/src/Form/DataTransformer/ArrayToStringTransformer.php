<?php

namespace App\Form\DataTransformer;

use Symfony\Component\Form\DataTransformerInterface;

/**
 * @implements DataTransformerInterface<array, string>
 */
class ArrayToStringTransformer implements DataTransformerInterface
{

    /**
     * 
     * @param string $asString
     * @return array<int,string>
     */
    public function reverseTransform($asString): array
    {
        if ($asString == "") {
            return [];
        }

        $asArray = explode(',', $asString);

        $func = function (string $value): string {
            return str_pad($value, 2, 00, STR_PAD_LEFT);
        };

        return array_map($func, $asArray);
    }

    /**
     * 
     * @param array<int,string> $asArray
     * @return string
     */
    public function transform($asArray): string
    {
        return implode(',', $asArray);
    }
}
