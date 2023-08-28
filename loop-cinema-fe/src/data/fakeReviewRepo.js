const FAKE_REVIEW_COUNT = 'fake_review_count'
const FAKE_REVIEW_TIME = 'fake_review_time'
const FAKE_REVIEW_TIME_SET = 60

/**
 * init audience review to localStorage first time
 * @returns none
 */
const initFakeReviewCount = () => {
    // check if object is already initialized
    if (localStorage.getItem(FAKE_REVIEW_COUNT) !== null) {
        return
    } else {
        const count = 0;
        localStorage.setItem(FAKE_REVIEW_COUNT, JSON.stringify(count))
    }
}

const initFakeReviewTime = () => {
    // check if object is already initialized
    if (localStorage.getItem(FAKE_REVIEW_TIME) !== null) {
        return
    } else {
        const time = 0;
        localStorage.setItem(FAKE_REVIEW_TIME, JSON.stringify(time))

        // setInterval(() => {
        //     setFakeReviewTime(time)
        //     if (getFakeReviewTime == 60) {
        //         removeFakeReviewTime()
        //         initFakeReviewTime()
        //     }
        // }, 1000)

        
    }
}

const getFakeReviewCount = () => {
    const response = localStorage.getItem(FAKE_REVIEW_COUNT);
    return JSON.parse(response);  
}

const getFakeReviewTime = () => {
    const response = localStorage.getItem(FAKE_REVIEW_TIME);
    return JSON.parse(response);  
}

const setFakeReviewCount = (count) => {
    removeFakeReviewCount();
    localStorage.setItem(FAKE_REVIEW_COUNT, JSON.stringify(++count))
}

const removeFakeReviewCount = () => {
    localStorage.removeItem(FAKE_REVIEW_COUNT);
}

const setFakeReviewTime = (time) => {
    removeFakeReviewTime();
    localStorage.setItem(FAKE_REVIEW_TIME, JSON.stringify(time))
}

const removeFakeReviewTime = () => {
    localStorage.removeItem(FAKE_REVIEW_TIME);
}

export {
    initFakeReviewCount,
    initFakeReviewTime
}