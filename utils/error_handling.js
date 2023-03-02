class ErrorHandling {
    getResponse(error, res) {
        if (error.code == 'auth/too-many-requests') {
            res.status(500).json({ message: 'Çok fazla deneme yaptınız. Lütfen daha sonra tekrar deneyiniz.' });
        } else if (error.code == 'auth/user-not-found') {
            res.status(401).json({ message: 'Kullanıcı bulunamadı' });
        } else if (error.code == 'auth/wrong-password') {
            res.status(401).json({ message: 'Parola hatalı' });
        } else if (error.code == 'auth/invalid-credential') {
            res.status(401).json({ message: 'Oturum sonlandırıldı' });
        } else if (error.code == 'auth/user-disabled') {
            res.status(403).json({ message: 'Hesap askıya alınmış' });
        } else {
            res.status(500).json({ message: 'İşlem başarısız' });
        }
    }
}

module.exports=ErrorHandling;