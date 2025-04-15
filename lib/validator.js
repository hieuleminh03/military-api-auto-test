export function is_success (res) {
    if (res.status < 200 && res.status > 300) {
        return false;
    }
    if (res.data.status != 'success') {
        return false;
    }
    return true;
}