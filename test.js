async function register() {
    try {
        const response = await fetch("http://20.207.122.201/evaluation-service/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: "mp9816@srmist.edu.in",
                name: "Mythri Panugatla",
                mobileNo: "9502932845",
                githubUsername: "mythripanugatlagoud",
                rollNo: "RA2311026010032",
                accessCode: "QkbpxH"
            })
        });

        const result = await response.json();
        console.log("Registration Success:", result);

    } catch (error) {
        console.error("Error:", error);
    }
}

register();