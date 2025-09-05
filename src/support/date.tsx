export default function useDateNow() {
    const date = new Date().getDate(), month = new Date().getMonth(), year = new Date().getFullYear();

    function formedData() {
        let formedDate = ""
        let formedMonth = ""
        if (date < 10) {
            formedDate = "0" + date
        } if (month < 10) {
            formedMonth = "0" + (month + 1)
        } else {
            formedDate = date.toString();
            formedMonth = (month + 1).toString()
        }
        return `${formedDate}.${formedMonth}.${year}`
    }
    return formedData()
}