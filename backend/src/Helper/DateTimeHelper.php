<?php

namespace App\Helper;

use DateTime;
use DateTimeImmutable;
use DateTimeInterface;
use DateTimeZone;

final class DateTimeHelper
{

    public static function currentDateTime(?string $dateTimeZoneName = null): DateTimeInterface
    {
        $dateTime = new DateTime();

        if (null !== $dateTimeZoneName) {
            $dateTime->setTimeZone(new DateTimeZone($dateTimeZoneName));
        }

        return $dateTime;
    }

    public static function currentDateTimeImmutable(?string $dateTimeZoneName = null): DateTimeImmutable
    {
        $dateTime = self::currentDateTime($dateTimeZoneName);

        return DateTimeImmutable::createFromInterface($dateTime);
    }
}
