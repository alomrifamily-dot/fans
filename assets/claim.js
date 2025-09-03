function claim() { 
  fetch(`${API_BASE}/api/wallet/award`, { 
    method: "POST", 
    headers: { "Content-Type": "application/json" }, 
    body: JSON.stringify({ fanId: "fan_123", currency: "POINTS", amount: 100, reason: "Claim reward" }) 
  }) 
  .then(res =
  .then(data = = JSON.stringify(data, null, 2)) 
  .catch(err =, err)); 
} 
