// Initialize the Speech Synthesis API for text-to-speech
function speak(text) {
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}

// Function to process commands
function processCommand() {
    const command = document.getElementById('command').value.toLowerCase();
    const responseDiv = document.getElementById('response');

    if (command.includes("play song")) {
        let songName = command.replace("play song", "").trim();
        responseDiv.innerHTML = `Playing '${songName}' on YouTube.`;
        speak(`Playing ${songName} on YouTube.`);
        // Open YouTube with the song search
        window.open(`https://www.youtube.com/results?search_query=${encodeURIComponent(songName)}`);
    } else if (command.includes("who is your creator")) {
        let response = "Pranshul Jain is my creator.";
        responseDiv.innerHTML = response;
        speak(response);
    } else if (command.includes("open")) {
        let siteName = command.replace("open", "").trim();
        let sites = {
            "youtube": "https://www.youtube.com",
            "facebook": "https://www.facebook.com",
            "instagram": "https://www.instagram.com",
            "google": "https://www.google.com"
        };
        if (sites[siteName]) {
            responseDiv.innerHTML = `Opening ${siteName}...`;
            speak(`Opening ${siteName}`);
            window.open(sites[siteName]);
        } else {
            responseDiv.innerHTML = "Website not recognized.";
            speak("Website not recognized.");
        }
    } else if (command.includes("exit")) {
        let goodbye = "Goodbye, Baby! Come back soon!";
        responseDiv.innerHTML = goodbye;
        speak(goodbye);
    } else {
        let response = "Command not recognized. Searching Wikipedia for an answer...";
        responseDiv.innerHTML = response;
        speak(response);
        // Wikipedia API fetch here
    }
}
