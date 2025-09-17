export interface DtoJob {
    order: number
    jobTitle: string
    companyName: string
    displayStartDate?: string
    displayEndDate?: string
    description: string
    duration: number
    endDate: Date
    startDate: Date
    current: boolean
}