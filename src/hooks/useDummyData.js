import { useState } from 'react';

const generateDummyNames = (count = 20000) => {
    // const generateDummyNames = (count = 20000) => {
    const firstNames = [
        "Alex", "Sam", "Jordan", "Chris", "Taylor", "Morgan", "Jamie", "Casey",
        "Drew", "Riley", "Avery", "Parker", "Quinn", "Cameron", "Blake", "Kai",
        "Noah", "Liam", "Emma", "Olivia", "Mia", "Sophia", "Lucas", "Ethan"
    ];

    const lastNames = [
        "Smith", "Johnson", "Brown", "Garcia", "Martinez", "Lee", "Walker",
        "Hall", "Allen", "Young", "King", "Wright", "Scott", "Green",
        "Baker", "Adams", "Nelson", "Hill", "Rivera", "Campbell"
    ];

    const result = [];

    for (let i = 0; i < count; i++) {
        const first = firstNames[Math.floor(Math.random() * firstNames.length)];
        const last = lastNames[Math.floor(Math.random() * lastNames.length)];

        result.push(`${first} ${last}`);
    }

    return result;
}

const DUMMY_NAMES = generateDummyNames();

export const useDummyData = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);

    const fetchData = async (endPoint, params) => {
        setLoading(true);
        setError(null);
        setSuccess(false);

        try {
            const route = routes.find(route => route.endPoint === endPoint);
            if (!route) {
                throw new Error(`No route found for ${endPoint}`);
            }

            await sleep(1); // fake API delay

            const res = await route.function(params);
            setSuccess(true);
            return res;
        } catch (err) {
            console.error(err);
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    return { fetchData, loading, error, success };
};

export const getNames = async ({ search, limit }) => {
    let dummyNames = DUMMY_NAMES;
    if (search || limit) {
        const q = search.toLowerCase();
        dummyNames = dummyNames.filter(name => name.toLowerCase().includes(q)).slice(0, limit);
    }
    return dummyNames;
}

export const sleep = ms => new Promise(r => setTimeout(r, ms));

export const routes = [
    {
        endPoint: '/get-names',
        function: getNames
    }
];