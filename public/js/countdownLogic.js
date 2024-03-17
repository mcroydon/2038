document.addEventListener('DOMContentLoaded', (event) => {
    const targetDate = new Date(Date.UTC(2038, 0, 19, 3, 14, 7)); // Target date and time
    const timeUnitSelector = document.getElementById('timeUnitSelector'); // Get the dropdown selector

    const calculateTotalUnits = (difference, unit) => {
        switch (unit) {
            case 'seconds':
                return Math.floor(difference / 1000);
            case 'minutes':
                return Math.floor(difference / (1000 * 60));
            case 'hours':
                return Math.floor(difference / (1000 * 60 * 60));
            case 'days':
                return Math.floor(difference / (1000 * 60 * 60 * 24));
            case 'months':
                return Math.floor(difference / (1000 * 60 * 60 * 24 * 30.44));
            case 'years':
                return Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25));
            default:
                return {
                    seconds: Math.floor((difference / 1000) % 60),
                    minutes: Math.floor((difference / (1000 * 60)) % 60),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    days: Math.floor(difference / (1000 * 60 * 60 * 24) % 30.44),
                    months: Math.floor(difference / (1000 * 60 * 60 * 24 * 30.44) % 12),
                    years: Math.floor(difference / (1000 * 60 * 60 * 24 * 365.25))
                };
        }
    };

    const formatCountdown = (difference, unit) => {
        if (['seconds', 'minutes', 'hours', 'days', 'months', 'years'].includes(unit)) {
            return `${calculateTotalUnits(difference, unit)} ${unit.charAt(0).toUpperCase() + unit.slice(1)}`;
        } else {
            const totalUnits = calculateTotalUnits(difference, unit);
            if (typeof totalUnits === 'object') {
                const { years, months, days, hours, minutes, seconds } = totalUnits;
                return `${years} Years ${months} Months ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds`;
            } else {
                return totalUnits;
            }
        }
    };

    const updateCountdown = () => {
        try {
            const now = new Date();
            const difference = targetDate - now;

            if (difference < 0) {
                console.log("Countdown has ended.");
                return;
            }

            const unit = timeUnitSelector.value; // Get the selected time unit
            const countdownDisplay = document.getElementById('countdownTimer');
            if (countdownDisplay) {
                countdownDisplay.textContent = formatCountdown(difference, unit);
            } else {
                console.error("Countdown display element not found.");
            }
        } catch (error) {
            console.error("Failed to update countdown:", error.message, error.stack);
        }
    };

    const displayCurrentUnixTime = () => {
        try {
            const now = new Date();
            const humanReadableFormat = now.toUTCString(); // Gets the current time in a human-readable format
            const unixTimeSeconds = Math.floor(now.getTime() / 1000); // Gets the Unix time in seconds
            // Convert to 32-bit binary and ensure it's padded correctly
            const binaryString = unixTimeSeconds.toString(2).padStart(32, "0");
            // Split the binary string into 8-bit sections for readability
            const formatted32Bit = binaryString.match(/.{1,8}/g).join(" ");

            // Locate the div for displaying current Unix time and update its contents
            const displayElement = document.getElementById('currentUnixTimeDisplay');
            if (displayElement) {
                displayElement.innerHTML = `<p>${humanReadableFormat}</p><p>${formatted32Bit}</p>`;
            } else {
                console.error("Display element for current Unix time not found.");
            }
        } catch (error) {
            console.error("Failed to display current Unix time:", error.message, error.stack);
        }
    };

    // Update the countdown every second
    setInterval(updateCountdown, 1000);

    // Call displayCurrentUnixTime immediately to display the time as soon as the page loads
    displayCurrentUnixTime();

    // Update the display every second
    setInterval(displayCurrentUnixTime, 1000);

    // Listen for changes in the time unit selection and update the countdown display
    timeUnitSelector.addEventListener('change', updateCountdown);

    document.addEventListener('keydown', (event) => {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            event.preventDefault(); // Prevent scrolling
            const selector = document.getElementById('timeUnitSelector');
            const selectedIndex = selector.selectedIndex;
            if (event.key === 'ArrowUp' && selectedIndex > 0) {
                selector.selectedIndex = selectedIndex - 1;
            } else if (event.key === 'ArrowDown' && selectedIndex < selector.length - 1) {
                selector.selectedIndex = selectedIndex + 1;
            }
            selector.dispatchEvent(new Event('change')); // Trigger the change event
        }
    });
});