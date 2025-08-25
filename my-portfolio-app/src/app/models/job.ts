export interface Job {
    order: number;
    companyName: string;
    jobTitle: string;
    description: string;
    startDate: Date;
    displayStartDate?: string;
    endDate: Date | null;
    displayEndDate?: string;
    duration: number;
    current: boolean;
}