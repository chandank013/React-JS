import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        const upperCurrency = currency.toUpperCase(); // Ensure uppercase
        fetch(`https://v6.exchangerate-api.com/v6/ad8af986d9d6db25da195535/latest/${upperCurrency}`)
            .then((res) => res.json())
            .then((res) => setData(res.conversion_rates || {}));
    }, [currency]);

    return data;
}

export default useCurrencyInfo;
