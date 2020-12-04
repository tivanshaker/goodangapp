'use strict';

exports.ok = function(values, res){
    var data = {
        'status':200,
        'values':values
    };

     res.json(data);
     res.end();
};

//response untuk nested barang
exports.oknested = function(values, res){
    //lakukan akumulasi
    const hasil = values.reduce((akumulasikan, item)=>{
        //tentukan key group
        if(akumulasikan[item.nama_toko]){
            //buat variabel group nama toko
            const group = akumulasikan[item.nama_toko];
            //cek jika isi array adalah barang
            if(Array.isArray(group.barang)){
                //tambahkan value ke dalam group barang
                group.barang.push(item.nama_barang);
            }else {
                group.barang = [group.barang, item.nama_barang];
            }
        }else {
            akumulasikan[item.nama_toko] = item;
        }
        return akumulasikan;
    }, {});

    var data = {
        'status':200,
        'values':hasil
    };
    
     res.json(data);
     res.end();

}