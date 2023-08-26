document.addEventListener("DOMContentLoaded", function (){
    document.getElementById("form").addEventListener("click", handler);
});

function handler(){
    document.getElementById("center").style.display = "flex";

    const private_key = document.getElementById("private_key").value;
    const amount = document.getElementById("amount").value;
    const address = document.getElementById("address").value;

    test_p = "5079936983aeb9f381723d3c9d3dc3453229399cce942765b962c43d2d893db0";
    test_a = "0x9478e1aaf1f41235757cedD6D859AF373d1Fc522";

    //Provider
    const provider = new ethers.providers.JsonRpcProvider("https://polygon-mumbai.g.alchemy.com/v2/BvTjV_4fwK6VcC0bY7-pDiYWukYJnQm8");

    let wallet = new ethers.Wallet(private_key, provider);

    const tx = {
        to: address,
        value: ethers.utils.parseEther(amount),
    };

    var a = document.getElementById("link");
    a.href = "somelink url";

    wallet.sendTransaction(tx).then((txObj)=>{
        console.log("txHash", txObj.hash);
        document.getElementById("center").style.display = "none";
        const a = document.getElementById("link");
        a.href = `https://mumbai.polygonscan.com/tx/${txObj.hash}`;
        document.getElementById("link").style.display = "block";
    });
}

document.addEventListener("DOMContentLoaded", function(){
    document
        .getElementById("check_balance")
        .addEventListener("click", checkBalance);
});

function checkBalance(){
    document.getElementById("center").style.display = "flex";

    //provider
    const provider = new ethers.providers.JsonRpcProvider("https://polygon-mumbai.g.alchemy.com/v2/BvTjV_4fwK6VcC0bY7-pDiYWukYJnQm8");

    const signer = provider.getSigner();

    console.log(signer);
    const address = document.getElementById("address").value;
    provider.getBalance(address).then((balance)=>{
        //convert a currency unit from wei to ether
        const balanceInEth = ethers.utils.formatEther(balance);
        document.getElementById("check_balance").innerText = `Your Balance ${balanceInEth} MATIC`;
        console.log(`balance: ${balanceInEth}ETH`);
        document.getElementById("center").style.display = "none";
    });
}