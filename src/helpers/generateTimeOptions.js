export const generateTimeOptions = () => {
  const options = [];
  const startTime = 9 * 60; // Приводим начальное время в минуты (9:00 * 60 минут в часе)
  const endTime = 11 * 60; // Приводим конечное время в минуты (18:00 * 60 минут в часе)
  const step = 30; // Шаг времени в минутах (полчаса = 30 минут)

  // Добавляем заголовок
  options.push({
    value: "header",
    label: "Meeting Time",
    isDisabled: true,
  });

  // Генерируем опции времени
  for (let i = startTime; i <= endTime; i += step) {
    const hour = Math.floor(i / 60); // Получаем часы
    const minute = i % 60; // Получаем минуты
    const timeString = `${hour.toString().padStart(2, "0")}  :  ${minute
      .toString()
      .padStart(2, "0")}`; // Преобразуем в строку времени в формате "час:минута"
    options.push({ value: timeString, label: timeString });
  }

  return options;
};
