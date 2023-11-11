let userAccounts = {
    '9004891266HDFC0000490': {name:'ram krishnan konar',IFSC_Code:'HDFC0000490',amount:'1000'},
    user2: 500,
    user3: 750,
  };

export default function handler(req, res) {
    const amount = 1;
    if (req.method === 'POST') {
        const { receiver ,name, IFSC_Code } = req.body;
        // Check if sender and receiver exist in user accounts
        if (!userAccounts[receiver+IFSC_Code]) {
          return res.status(400).json({ error: 'Invalid receiver' });
        }

        // Perform penny drop transaction
        userAccounts[receiver] += amount;

        res.status(200).json({ account:receiver, message: 'Penny drop successful' });
    } else {
        res.status(200).json({ name: 'Penny Drop API' })
    }
  }
