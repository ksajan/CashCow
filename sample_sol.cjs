const web3 = require("@solana/web3.js");
const bs58 = require("bs58"); // To decode the private key

// Connect to Solana Devnet using Helius RPC
const connection = new web3.Connection(
  "https://devnet.helius-rpc.com/?api-key=39dd186b-8a8b-412f-8ed9-db96c52d1196",
  "confirmed",
);

// Private key as base58 encoded string (Replace this with your actual private key)
const secretKeyBase58 =
  "675BoYSggKjqXrVLwWRGRs7qrGvAiuZ2LWvcXqFndYWwTsFCHqFLzAnGHdqLYX3EeaM7KaECqBzvrs7mswbdQNGj";

// Decode the private key and create a Keypair
const fromKeypair = web3.Keypair.fromSecretKey(bs58.decode(secretKeyBase58));

console.log("From Address:", fromKeypair.publicKey.toString());

// Define the recipient's address
const toPublicKey = new web3.PublicKey(
  "CPHfAW51cDqE7VkLa7wtJb4C4b1VepAGJZpyf9DXk4cw",
);
console.log("To Address:", toPublicKey.toString());

// Amount to send (in SOL)
const solAmount = 0.01; // Sending 0.01 SOL
const lamports = solAmount * web3.LAMPORTS_PER_SOL; // Convert SOL to lamports

(async () => {
  try {
    // Create transaction
    // console.log(
    //   web3.SystemProgram.transfer({
    //     fromPubkey: fromKeypair.publicKey,
    //     toPubkey: toPublicKey,
    //     lamports: lamports, // 0.01 SOL in lamports
    //   }),
    //   new web3.TransactionInstruction({
    //     keys: [
    //       { pubkey: fromKeypair.publicKey, isSigner: true, isWritable: true },
    //       { pubkey: toPublicKey, isSigner: false, isWritable: true },
    //     ],
    //     programId: web3.SystemProgram.programId,
    //     data: Buffer.from("Sajan"),
    //   }),
    // );
    const transaction = new web3.Transaction().add(
      web3.SystemProgram.transfer({
        fromPubkey: fromKeypair.publicKey,
        toPubkey: toPublicKey,
        lamports: lamports, // 0.01 SOL in lamports
      }),
    );
    // Add a memo to the transaction
    transaction.add(
      new web3.TransactionInstruction({
        keys: [
          { pubkey: fromKeypair.publicKey, isSigner: true, isWritable: true },
        ],
        programId: new web3.PublicKey(
          "MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr",
        ),
        data: Buffer.from("Sajan in the house", "utf-8"),
      }),
    );

    // Get recent blockhash
    const { blockhash } = await connection.getLatestBlockhash();
    transaction.recentBlockhash = blockhash;
    transaction.feePayer = fromKeypair.publicKey;

    // Sign the transaction
    transaction.sign(fromKeypair);

    // Send transaction
    const signature = await web3.sendAndConfirmTransaction(
      connection,
      transaction,
      [fromKeypair],
    );

    console.log("Transaction Successful! SIGNATURE:", signature);
  } catch (error) {
    console.error("Transaction Failed:", error);
  }
})();

// async function fetch n Signatures

(async () => {
  try {
    const signatures = await connection.getSignaturesForAddress(
      fromKeypair.publicKey,
      {
        limit: 10,
      },
    );
    console.log("Signatures:", signatures);
  } catch (error) {
    console.error("Error fetching signatures:", error);
  }
})();
