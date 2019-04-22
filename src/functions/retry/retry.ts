import {
    RetryFunction,
    InnerRetryFunction
} from '../../../types';


const retry: RetryFunction = (callback, options = {
    timeout: 1000,
    maxCount: 3
}) => {
    const {
        timeout,
        maxCount
    } = options;
    let count = 1;

    const innerRetry: InnerRetryFunction = async () => {
        try {
            return await new Promise((resolve, reject) => {
                setTimeout(async () => {
                    try {
                        const result = await callback();

                        resolve(result);
                    } catch (e) {
                        reject();
                    }
                }, timeout);
            });
        } catch {
            count++;

            if (count <= maxCount) {
                return innerRetry();
            }
        }
    };

    return innerRetry();
};


export default retry;
