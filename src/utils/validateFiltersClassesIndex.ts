import {Request, Response} from 'express';

export default function validateFiltersClassesIndex(req: Request, res: Response, filters: any) {
    
    
        const week_day = filters.week_day as string;
        const subject = filters.subject as string;
        const time = filters.time as string;
        var errMsg;

        if (!week_day) {
            return res.status(400).send({
                error: "missing_week_day_filter_to_search_classes"
            });
        }

        if (!subject) {
            return res.status(400).send({
                error: "missing_subject_filter_to_search_classes"
            });
        }

        if (!time) {
            return res.status(400).send({
                error: "missing_subject_filter_to_search_classes"
            });
        }    

        

        

        
    
    
    
    /* const [hour, minutes] = time.split(':').map(Number);
    const timeInMinutes = ((hour * 60) + minutes);
    return timeInMinutes;    */
}