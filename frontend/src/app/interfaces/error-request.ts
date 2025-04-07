export interface ErrorRequest {
    "type": string,
    "title": string,
    "status": number,
    "detail": string[],
    "timestamp": string
}
