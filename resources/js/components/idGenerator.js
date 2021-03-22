export default function generateId() {
    return ((Math.round(Math.random() * (1000000 - 1) + 1).toString()));
}