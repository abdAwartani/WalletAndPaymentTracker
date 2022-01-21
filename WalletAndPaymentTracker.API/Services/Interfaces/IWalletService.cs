using System.Collections.Generic;
using WalletAndPaymentTracker.API.Data;

namespace WalletAndPaymentTracker.API.Services.Interfaces
{
    public interface IWalletService
    {
        List<Wallet> GetAll();
        Wallet Get(string name);
        string Add(Wallet wallet);
        string Update(Wallet wallet);
        bool Delete(string name);
    }
}