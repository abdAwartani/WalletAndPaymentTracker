using System;
using System.Collections.Generic;
using System.IO;
using WalletAndPaymentTracker.API.Data;
using WalletAndPaymentTracker.API.Services.Interfaces;

namespace WalletAndPaymentTracker.API.Services.Concrete
{
    public class WalletService : IWalletService
    {
        private const string _walletPath = "C:\\Wallet";
        public List<Wallet> GetAll()
        {
            List<Wallet> walletList = new List<Wallet>();

            if (!Directory.Exists(_walletPath))
                Directory.CreateDirectory(_walletPath);
            else
            {
                string[] walletNameList = Directory.GetFiles(_walletPath);

                foreach (string id in walletNameList)
                {
                    walletList.Add(Get(id));
                }
            }

            return walletList;
        }

        public Wallet Get(string name)
        {
            Wallet wallet = new Wallet();

            if (!Directory.Exists(_walletPath))
                Directory.CreateDirectory(_walletPath);
            else
            {
                if (File.Exists(_walletPath + name))
                    wallet.WalletJson = File.ReadAllText(_walletPath + name);
            }

            return wallet;
        }

        public string Add(Wallet wallet)
        {
            if (!Directory.Exists(_walletPath))
                Directory.CreateDirectory(_walletPath);

            string name = Guid.NewGuid().ToString();

            File.WriteAllText(_walletPath + "\\" + name, wallet.WalletJson);

            return name;
        }

        public string Update(Wallet wallet)
        {
            Wallet oldWallet = Get(wallet.Name);

            File.WriteAllText(_walletPath + "\\" + oldWallet.Name, wallet.WalletJson);

            return oldWallet.Name;
        }

        public bool Delete(string name)
        {
            File.Delete(_walletPath + "\\" + name);

            return !File.Exists(_walletPath + "\\" + name);
        }
    }
}
