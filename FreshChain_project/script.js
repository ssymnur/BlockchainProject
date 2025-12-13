const CONTRACT_ADDRESS = "0x2B6A68EC966606848c3Ff0Be5D98B8393c8576B1"; // deploy adresin
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
			},
			{
				"indexed": false,
				"internalType": "bool",
				"name": "passedInspection",
				"type": "bool"
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
			},
			{
				"internalType": "bool",
				"name": "_passedInspection",
				"type": "bool"
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
		"inputs": [],
		"name": "owner",
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
];


let provider;
let signer;
let contract;

/* ================= INIT ================= */

async function initBlockchain() {
  if (typeof window.ethereum === "undefined") {
    alert("❌ MetaMask not found! (Chrome + MetaMask gerekli)");
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

/* ================= UI ================= */

const roleSelect = document.getElementById("role");
const container = document.getElementById("ui-container");

roleSelect.addEventListener("change", () => {
  const role = roleSelect.value;
  container.innerHTML = "";

  /* ========== PRODUCER ========== */
  if (role === "producer") {
    container.innerHTML = `
      <div class="section">
        <h3>Create Product Batch</h3>
        <input id="batchId" placeholder="Batch ID" />
        <input id="productName" placeholder="Product Name" />
        <input id="quantity" placeholder="Quantity" />
        <button id="createBatchBtn">Create Batch</button>
      </div>
    `;

    document.getElementById("createBatchBtn").onclick = async () => {
      if (!contract) {
        alert("❌ Contract not ready");
        return;
      }

      try {
        const tx = await contract.createBatch(
          document.getElementById("batchId").value,
          document.getElementById("productName").value,
          document.getElementById("quantity").value
        );

        await tx.wait();
        alert("✅ Batch created successfully!");
      } catch (err) {
        console.error(err);
        alert("❌ ERROR: " + (err.reason || err.message));
      }
    };
  }

  /* ========== TRANSPORTER ========== */
  if (role === "transporter") {
    container.innerHTML = `
      <div class="section">
        <h3>Add Sensor Data</h3>
        <input id="batchId" placeholder="Batch ID" />
        <input id="temp" placeholder="Temperature (-10 to 40)" />
        <input id="humidity" placeholder="Humidity (0 to 40)" />
        <input id="location" placeholder="Location" />
        <button id="sensorBtn">Add Sensor Data</button>
      </div>
    `;

    document.getElementById("sensorBtn").onclick = async () => {
      try {
        const tx = await contract.addSensorData(
          document.getElementById("batchId").value,
          document.getElementById("temp").value,
          document.getElementById("humidity").value,
          document.getElementById("location").value
        );

        await tx.wait();
        alert("✅ Sensor data added!");
      } catch (err) {
        alert("❌ ERROR: " + (err.reason || err.message));
      }
    };
  }

  /* ========== DISTRIBUTOR ========== */
  if (role === "distributor") {
    container.innerHTML = `
      <div class="section">
        <h3>Transfer Ownership</h3>
        <input id="batchId" placeholder="Batch ID" />
        <input id="newOwner" placeholder="New Owner Address" />
        <button id="transferBtn">Transfer</button>
      </div>
    `;

    document.getElementById("transferBtn").onclick = async () => {
      try {
        const tx = await contract.transferOwnership(
          document.getElementById("batchId").value,
          document.getElementById("newOwner").value
        );

        await tx.wait();
        alert("✅ Ownership transferred!");
      } catch (err) {
        alert("❌ ERROR: " + (err.reason || err.message));
      }
    };
  }

  /* ========== RETAILER ========== */
  if (role === "retailer") {
    container.innerHTML = `
      <div class="section">
        <h3>Final Inspection</h3>
        <input id="batchId" placeholder="Batch ID" />
        <button id="arrivedBtn">Mark as Arrived</button>
      </div>
    `;

    document.getElementById("arrivedBtn").onclick = async () => {
      try {
        const tx = await contract.markAsArrived(
          document.getElementById("batchId").value,
          true
        );

        await tx.wait();
        alert("✅ Product marked as arrived!");
      } catch (err) {
        alert("❌ ERROR: " + (err.reason || err.message));
      }
    };
  }

  /* ========== CUSTOMER ========== */
  if (role === "customer") {
    container.innerHTML = `
      <div class="section">
        <h3>View Product History</h3>
        <input id="batchId" placeholder="Batch ID" />
        <button id="viewBtn">View</button>
        <pre id="output"></pre>
        <canvas id="qr"></canvas>
      </div>
    `;

    document.getElementById("viewBtn").onclick = async () => {
  const batchId = document.getElementById("batchId").value;
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

  document.getElementById("output").textContent =
    JSON.stringify(formatted, null, 2);

  // QR KOD
  QRCode.toCanvas(
  document.getElementById("qr"),
  `http://localhost:5501/index.html?batchId=${formatted.batchId}`
);

};

  }
});


