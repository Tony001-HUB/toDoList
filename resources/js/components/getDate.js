export default function getDate() {
    let d = new Date();
    let curr_date = d.getDate();
    let curr_month = d.getMonth() + 1;
    let curr_year = d.getFullYear();
    let data = curr_year + "-" + curr_month + "-" + curr_date;
    return data;
}