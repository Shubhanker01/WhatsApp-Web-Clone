function formatWhatsAppDate(date) {
    const now = new Date();
    const messageDate = new Date(date);

    const isToday =
        now.toDateString() === messageDate.toDateString();

    const yesterday = new Date();
    yesterday.setDate(now.getDate() - 1);
    const isYesterday =
        yesterday.toDateString() === messageDate.toDateString();

    const diffInDays = Math.floor(
        (now - messageDate) / (1000 * 60 * 60 * 24)
    );

    if (isToday) {
        // Show time in 12-hour format with AM/PM
        return messageDate.toLocaleTimeString([], {
            hour: 'numeric',
            minute: '2-digit',
        });
    } else if (isYesterday) {
        return "Yesterday";
    } else if (diffInDays < 7) {
        // Show weekday name
        return messageDate.toLocaleDateString([], { weekday: 'long' });
    } else {
        // Show DD/MM/YYYY
        return messageDate.toLocaleDateString([], {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    }
}

export default formatWhatsAppDate
