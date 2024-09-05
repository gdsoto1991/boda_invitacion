simplyCountdown('#cuenta', {
    year: 2024,
    month: 3,
    day: 9,
    hours: 7,
    minutes: 31,
    seconds: 0,
    words: {
        days: 'Día',
        hours: 'Hora',
        minutes: 'Minuto',
        seconds: 'Segundo',
        pluralLetter: 's',
    },
    plural: true,
    inline: false,
    inlineClass: 'simply-countdown-inline',
    enableUtc: true,
    onEnd: function () {
        // Deja la función vacía o añade alguna acción sin ocultar el contador
    },
    refresh: 1000,
    sectionClass: 'simply-section',
    amountClass: 'simply-amount',
    wordClass: 'simply-word',
    zeroPad: false,
    countUp: false,
});

