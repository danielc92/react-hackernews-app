export const calculateTimeDiffString = (seconds_item_time) => {

    let seconds_now = new Date().getTime() / 1000;
    let seconds_difference = Math.floor((seconds_now - seconds_item_time) / 60)
    let time_diff_string  = seconds_difference < 60 ? 
                            `${seconds_difference} minutes ago`: 
                            `${Math.floor(seconds_difference / 60)} hour(s) ago`
    return time_diff_string
}