export default async function getWords(num) {
    const URL = "https://random-word-api.herokuapp.com/word?number=";
    try {
        const response = await fetch(URL.concat(num));
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Error fetching words:', error);
        // You can handle the error here, such as displaying a message to the user or returning a default value.
        return [];
    }
}
