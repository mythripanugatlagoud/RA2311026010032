async function getAuthToken() {
    try {
        const response = await fetch("http://20.207.122.201/evaluation-service/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: "mp9816@srmist.edu.in",
                name: "mythri panugatla",
                rollNo: "ra2311026010032",
                accessCode: "QkbpxH",
                clientID: "dd9597bc-aa82-4338-97a5-c9c7258ddb2d",
                clientSecret: "PfUgrkjnuChRpqag"
            })
        });

        const data = await response.json();
        console.log("TOKEN:", data);

    } catch (error) {
        console.error("Error:", error);
    }
}

getAuthToken();