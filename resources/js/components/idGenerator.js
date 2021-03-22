export default function generateId() {
    return ((Math.round(Math.random() * (10000 - 1) + 1).toString()));
}