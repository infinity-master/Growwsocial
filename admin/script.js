console.log("🔍 Initializing Multi-Layer Security Protocol...");
    console.log("🔒 Secure Access Point Activated...");
    console.log("🛡️ Monitoring IP Address: " + getUserIP());

    let attempts = 0;
    const securityMessages = [
        "⚠️ Unauthorized Access Attempt Logged!",
        "🚨 Suspicious Activity Detected! Extra Security Measures Enabled.",
        "🔐 Firewall Alert: Multiple Failed Attempts Recorded.",
        "🛑 System Notice: Unauthorized Login Attempt Detected!",
        "📛 Warning! Your activity is being monitored."
    ];

    function closePopup() {
        console.log("✅ Security Verification: Authorized Access Granted");
        document.querySelector('.popup').style.display = 'none';
        document.querySelector('.login-container').style.display = 'block';
    }

    function redirectToHome() {
        console.log("🚨 Unauthorized Access Attempt Detected! Redirecting...");
        alert("⚠️ High-Security Alert: Unauthorized users are not allowed!");
        window.location.href = "/";
    }

    function getUserIP() {
        return "192.168.1.1"; // Fake static IP (Real IP requires a backend)
    }

    function runSecurityScan() {
        console.log("🔄 Running Deep Security Scan...");
        setTimeout(() => {
            console.log("✅ No Threats Detected. Proceeding...");
        }, 2000);
    }

    function trackMouseMovements() {
        document.addEventListener("mousemove", () => {
            console.log("🖱️ Motion Detected: Active User Monitoring Enabled");
        });
    }

    function fakeFirewallCheck() {
        console.log("🛑 Firewall Status: Maximum Security Enabled");
        setTimeout(() => {
            console.log("🚀 Intrusion Detection System: All Clear");
        }, 3000);
    }

    function detectScreenRecording() {
        console.log("📷 Anti-Screen Recording Check: Secure Mode Active");
    }

    function preventBruteForce() {
        if (attempts >= 3) {
            console.log("🚨 Multiple Failed Attempts! Locking System...");
            document.querySelector('.login-btn').disabled = true;
            setTimeout(() => {
                document.querySelector('.login-btn').disabled = false;
                attempts = 0;
                console.log("✅ System Unlocked. User can retry login.");
            }, 30000); // 30 seconds lockout
        }
    }

    document.querySelector('.login-container form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form refresh
        let adminID = document.querySelector('.input-group input[type="text"]').value;
        let password = document.querySelector('.input-group input[type="password"]').value;

        console.log(`🔐 Login Attempt #${attempts + 1} Detected`);

        if (adminID === "admin" && password === "securepass") {
            console.log("✅ Authentication Successful. Redirecting to Admin Panel...");
            alert("✅ Secure Login Successful!");
            window.location.href = "/admin-dashboard";
        } else {
            attempts++;
            console.log(securityMessages[Math.floor(Math.random() * securityMessages.length)]);
            preventBruteForce();
            showErrorPopup(securityMessages[Math.floor(Math.random() * securityMessages.length)]);
        }
    });

    function showErrorPopup(message) {
        let errorPopup = document.createElement("div");
        errorPopup.style.position = "fixed";
        errorPopup.style.top = "50%";
        errorPopup.style.left = "50%";
        errorPopup.style.transform = "translate(-50%, -50%)";
        errorPopup.style.background = "rgba(255, 0, 0, 0.9)";
        errorPopup.style.color = "#fff";
        errorPopup.style.padding = "20px";
        errorPopup.style.borderRadius = "10px";
        errorPopup.style.textAlign = "center";
        errorPopup.style.boxShadow = "0 0 15px rgba(255,0,0,0.8)";
        errorPopup.style.fontSize = "18px";
        errorPopup.style.fontWeight = "bold";
        errorPopup.style.zIndex = "1000";
        errorPopup.innerText = message;

        document.body.appendChild(errorPopup);

        setTimeout(() => {
            errorPopup.remove();
        }, 3000);
    }

    // Execute fake security checks
    runSecurityScan();
    trackMouseMovements();
    fakeFirewallCheck();
    detectScreenRecording();
