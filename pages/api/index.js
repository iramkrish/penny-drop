let userAccounts = {
    919890603333: {name:'ram krishnan konar',IFSC_Code:'HDFC0000490',amount:'1000'},
    user2: 500,
    user3: 750,
  };

export default function handler(req, res) {
    const amount = 1;
    if (req.method === 'POST') {
        const { receiver ,name, IFSC_Code } = req.body;
        console.log(receiver ,name, IFSC_Code)
        // Check if sender and receiver exist in user accounts
        if (!userAccounts[receiver]) {
          return res.status(400).json({ error: 'Invalid receiver' });
        }

        // Check if sender has sufficient balance
        // if (userAccounts[sender] < amount) {
        //   return res.status(400).json({ error: 'Insufficient balance' });
        // }

        // Perform penny drop transaction
        // userAccounts[sender] -= amount;
        userAccounts[receiver] += amount;

        res.json({ message: 'Penny drop successful' });
    } else {
        res.status(200).json({ name: 'John Doe' })
    }
  }
