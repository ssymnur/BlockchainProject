const CONTRACT_ADDRESS = "0x0E7A52C8F30E54B2B316113183234F9B353Be4fb"; 
const ABI = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_batchId",
				"type": "uint256"
			},
			{
				"internalType": "int256",
				"name": "_temp",
				"type": "int256"
			},
			{
				"internalType": "int256",
				"name": "_humidity",
				"type": "int256"
			},
			{
				"internalType": "string",
				"name": "_location",
				"type": "string"
			}
		],
		"name": "addSensorData",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "batchId",
				"type": "uint256"
			}
		],
		"name": "Arrived",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "batchId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "productName",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			}
		],
		"name": "BatchCreated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_batchId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "_name",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "_quantity",
				"type": "uint256"
			}
		],
		"name": "createBatch",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_batchId",
				"type": "uint256"
			}
		],
		"name": "markAsArrived",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "batchId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "address",
				"name": "newOwner",
				"type": "address"
			}
		],
		"name": "OwnershipTransferred",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "registerDistributor",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "registerProducer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "registerRetailer",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "_addr",
				"type": "address"
			}
		],
		"name": "registerTransporter",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "batchId",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "int256",
				"name": "temperature",
				"type": "int256"
			},
			{
				"indexed": false,
				"internalType": "int256",
				"name": "humidity",
				"type": "int256"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "location",
				"type": "string"
			}
		],
		"name": "SensorAdded",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_batchId",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "_newOwner",
				"type": "address"
			}
		],
		"name": "transferOwnership",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "admin",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "batches",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "batchId",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "productName",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "quantity",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "currentOwner",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "arrived",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "distributors",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_batchId",
				"type": "uint256"
			}
		],
		"name": "getBatchHistory",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			},
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			},
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			},
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			},
			{
				"components": [
					{
						"internalType": "int256",
						"name": "temperature",
						"type": "int256"
					},
					{
						"internalType": "int256",
						"name": "humidity",
						"type": "int256"
					},
					{
						"internalType": "string",
						"name": "location",
						"type": "string"
					}
				],
				"internalType": "struct FreshChain.SensorData[]",
				"name": "",
				"type": "tuple[]"
			},
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "producers",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "retailers",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"name": "transporters",
		"outputs": [
			{
				"internalType": "bool",
				"name": "",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
const users = {
  producer: { id: "farmer01", password: "farmer123" },
  transporter: { id: "trans01", password: "trans123" },
  distributor: { id: "dist01", password: "dist123" },
  retailer: { id: "retail01", password: "retail123" },
  customer: { id: "cust01", password: "cust123" }
};

let loggedInRole = null;
let provider, signer, contract;

// Login işlemi
document.getElementById("loginBtn").onclick = () => {
  const role = document.getElementById("role").value;
  const userId = document.getElementById("userId").value;
  const password = document.getElementById("password").value;
  const loginStatus = document.getElementById("loginStatus");

  if (!role) {
    loginStatus.textContent = "❌ Please select a role";
    loginStatus.style.color = "red";
    return;
  }

  if (role === "customer") {
    loginStatus.textContent = "✅ Login successful (Customer)";
    loginStatus.style.color = "green";
    loggedInRole = role;
    document.getElementById("login-box").style.display = "none";
    loadRoleUI(role);
    return;
  }

  if (!userId || !password) {
    loginStatus.textContent = "❌ Please fill all fields";
    loginStatus.style.color = "red";
    return;
  }

  const user = users[role];
  if (user && user.id === userId && user.password === password) {
    loginStatus.textContent = "✅ Login successful";
    loginStatus.style.color = "green";
    loggedInRole = role;
    document.getElementById("login-box").style.display = "none";
    loadRoleUI(role);
  } else {
    loginStatus.textContent = "❌ Invalid ID or password";
    loginStatus.style.color = "red";
  }
};

// Blockchain init
async function initBlockchain() {
  if (typeof window.ethereum === "undefined") {
    alert("❌ MetaMask not found!");
    return;
  }
  try {
    provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    signer = provider.getSigner();
    contract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
    console.log("✅ MetaMask & Contract READY");
  } catch (err) {
    console.error("Init error:", err);
    alert("❌ Blockchain init failed");
  }
}
window.addEventListener("load", initBlockchain);

// Role bazlı UI
function loadRoleUI(role) {
  const container = document.getElementById("ui-container");
  container.innerHTML = "";

  // Back button
  const backBtn = document.createElement("button");
  backBtn.textContent = "🔙 Back to Login";
  backBtn.style.marginBottom = "10px";
  backBtn.onclick = () => {
    document.getElementById("login-box").style.display = "block";
    container.innerHTML = "";
    document.getElementById("loginStatus").textContent = "";
    loggedInRole = null;
  };
  container.appendChild(backBtn);

  let html = "";

  // PRODUCER
  if (role === "producer") {
    html = `
      <div class="section">
        <h3>Create Product Batch</h3>
        <input id="batchId" placeholder="Batch ID">
        <input id="productName" placeholder="Product Name">
        <input id="quantity" placeholder="Quantity">
        <button id="createBatchBtn">Create Batch</button>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", html);

    document.getElementById("createBatchBtn").onclick = async () => {
      try {
        const batchId = parseInt(document.getElementById("batchId").value);
        const quantity = parseInt(document.getElementById("quantity").value);
        const productName = document.getElementById("productName").value;

        const tx = await contract.createBatch(batchId, productName, quantity);
        await tx.wait();
        alert("✅ Batch created successfully!");
      } catch (err) {
        console.error(err);
        alert("❌ ERROR: " + (err.reason || err.message));
      }
    };
  }

  // TRANSPORTER
  if (role === "transporter") {
    html = `
      <div class="section">
        <h3>Add Sensor Data</h3>
        <input id="batchId" placeholder="Batch ID">
        <input id="temp" placeholder="Temperature (°C)">
        <input id="humidity" placeholder="Humidity (%)">
        <input id="location" placeholder="Location">
        <button id="sensorBtn">Add Data</button>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", html);

    document.getElementById("sensorBtn").onclick = async () => {
      try {
        const batchId = parseInt(document.getElementById("batchId").value);
        const temp = parseInt(document.getElementById("temp").value);
        const humidity = parseInt(document.getElementById("humidity").value);
        const location = document.getElementById("location").value;

        const tx = await contract.addSensorData(batchId, temp, humidity, location);
        await tx.wait();
        alert("✅ Sensor data added!");
      } catch (err) {
        alert("❌ ERROR: " + (err.reason || err.message));
      }
    };
  }

  // DISTRIBUTOR
  if (role === "distributor") {
    html = `
      <div class="section">
        <h3>🏬 Distributor - Transfer to Retailer</h3>
        <input id="batchId" placeholder="Batch ID">
        <input id="retailerAddr" placeholder="Retailer Address">
        <button id="transferBtn">Transfer to Retailer</button>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", html);

    document.getElementById("transferBtn").onclick = async () => {
      try {
        const batchId = parseInt(document.getElementById("batchId").value);
        const retailerAddr = document.getElementById("retailerAddr").value;

        if (!ethers.utils.isAddress(retailerAddr)) {
          alert("❌ Invalid Retailer Ethereum address");
          return;
        }

        const tx = await contract.transferOwnership(batchId, retailerAddr);
        await tx.wait();
        alert("✅ Ownership transferred to Retailer!");
      } catch (err) {
        alert("❌ ERROR: " + (err.reason || err.message));
      }
    };
  }

  // RETAILER
  if (role === "retailer") {
    html = `
      <div class="section">
        <h3>🏪 Retailer - Final Inspection</h3>
        <input id="batchId" placeholder="Batch ID">
        <button id="arrivedBtn">Mark as Arrived</button>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", html);

    document.getElementById("arrivedBtn").onclick = async () => {
      try {
        const batchId = parseInt(document.getElementById("batchId").value);
        const tx = await contract.markAsArrived(batchId); // sadece 1 parametre!
        await tx.wait();
        alert("✅ Product marked as arrived!");
      } catch (err) {
        alert("❌ ERROR: " + (err.reason || err.message));
      }
    };
  }

  // CUSTOMER
  if (role === "customer") {
    html = `
      <div class="section">
        <h3>🔍 View Product History</h3>
        <input id="batchId" placeholder="Enter Batch ID">
        <button id="viewBtn">View</button>
        <div id="output" class="card"></div>
        <canvas id="qr"></canvas>
      </div>
    `;
    container.insertAdjacentHTML("beforeend", html);

    document.getElementById("viewBtn").onclick = async () => {
      try {
        const batchId = parseInt(document.getElementById("batchId").value);
        const history = await contract.getBatchHistory(batchId);

        const formatted = {
          batchId: history[0].toNumber(),
          productName: history[1],
          quantity: history[2].toNumber(),
          currentOwner: history[3],
          arrived: history[4] ? "Yes" : "No",
          sensorLogs: history[5].map(log => ({
            temperature: log[0].toNumber() + " °C",
            humidity: log[1].toNumber() + " %",
            location: log[2]
          })),
          ownershipHistory: history[6]
        };

        const output = document.getElementById("output");
        output.innerHTML = `
          <h4>📦 Product Information</h4>
          <table>
            <tr><td><b>Batch ID</b></td><td>${formatted.batchId}</td></tr>
            <tr><td><b>Product</b></td><td>${formatted.productName}</td></tr>
            <tr><td><b>Quantity</b></td><td>${formatted.quantity}</td></tr>
            <tr><td><b>Arrived</b></td><td>${formatted.arrived}</td></tr>
          </table>

          <h4>🚚 Current Owner</h4>
          <p class="mono">${formatted.currentOwner}</p>

          <h4>🌡️ Sensor Logs</h4>
          ${
            formatted.sensorLogs.length === 0
              ? "<p>No sensor data available.</p>"
              : `
                <table>
                  <tr>
                    <th>Temperature</th>
                    <th>Humidity</th>
                    <th>Location</th>
                  </tr>
                  ${formatted.sensorLogs
                    .map(
                      log => `
                        <tr>
                          <td>${log.temperature}</td>
                          <td>${log.humidity}</td>
                          <td>${log.location}</td>
                        </tr>
                      `
                    )
                    .join("")}
                </table>
              `
          }

          <h4>🔗 Ownership History</h4>
          <ul>
            ${formatted.ownershipHistory
              .map(addr => `<li class="mono">${addr}</li>`)
              .join("")}
          </ul>
        `;

        QRCode.toCanvas(
          document.getElementById("qr"),
          `FreshChain Batch Verification\nBatch ID: ${formatted.batchId}\nProduct: ${formatted.productName}`
        );
      } catch (err) {
        console.error(err);
        alert("❌ ERROR: " + (err.reason || err.message));
      }
    };
  }
}

 
 
