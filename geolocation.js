document.getElementById('getLocation').addEventListener('click', function() {
    if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const latitude = position.coords.latitude;
                const longitude = position.coords.longitude;
                document.getElementById('location').textContent = `Latitude: ${latitude}, Longitude: ${longitude}`;
            },
            (error) => {
                console.error("Error getting location: " + error.message);
            }
        );
    } else {
        alert("Geolocation is not supported by your browser");
    }
});
