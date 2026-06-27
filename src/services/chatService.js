export async function getBotResponse(message) {
    try {
        const response = await fetch("https://the-policy-exchange-chatbot.onrender.com/chat", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                message,
            }),
        });

        if (!response.ok) {
            throw new Error("Failed to fetch response");
        }

        const data = await response.json();

        return data.response;
    } catch (error) {
        console.error(error);

        return "Sorry, I couldn't process your request at the moment. Please try again later.";
    }
}
