export function sleep(ms: number) {
    const start = Date.now();

    while (true) {
        const clock = (Date.now() - start);
        if (clock >= ms) {
            break;
        }
    }
}
