export const todayCustomFormate = () => {
    const daysOfWeek = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    const now = new Date()
    const todayDate = now.getDate()
    const twoDigitDay = todayDate < 10 ? '0' + todayDate : todayDate.toString();

    const [day, month, year, weekday] = [
        twoDigitDay, now.getMonth(), now.getFullYear(), daysOfWeek[now.getDay()]
    ]
    return `${day}.${month}.${year} ${weekday}`
}

export const getRandomInt = (min = 30, max = 100) => Math.round(Math.random() * (max - min) + min);