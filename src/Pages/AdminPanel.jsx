import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { auth, db, storage } from '../firebase';
import { useSelector } from 'react-redux';

function AdminPage() {
    const [productName, setProductName] = useState('');
    const [productPrice, setProductPrice] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [discount, setDiscount] = useState('');
    const [categories,setCategories]=useState("")

    // const { uid } = useSelector((state) => state.user);

    const description =
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident fugiat ipsa necessitatibus sint molestiae voluptatem? Optio, rerum iusto debitis, doloribus sequi ducimus mollitia ex eveniet earum doloremque cum, perferendis pariatur.';

    const handleImageChange = (e) => {
        if (e.target.files[0]) {
            setImageFile(e.target.files[0]);
        }
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if (!imageFile) {
            console.error('Lütfen bir resim dosyası seçin.');
            return;
        }


        try {
            // Resmi Storage'a yükleme
            const uniqueImageName =Math.floor( Math.random()*999986) + '_' + imageFile.name;
            const storageRef = ref(storage, 'products/' + uniqueImageName);
            await uploadBytes(storageRef, imageFile);

            // Resmin URL'sini alma
            const imageUrl = await getDownloadURL(storageRef);

            // Ürün bilgilerini Firestore'a ekleme


            const docRef = await addDoc(collection(db, 'products'), {
                name: productName,
                description,
                categories,
                price: parseFloat(productPrice),
                discount:parseFloat(discount),
                imageUrl: imageUrl,
                createdAt: new Date(),
            });

            console.log('Ürün başarıyla eklendi, belge ID:', docRef.id);

            // Formu sıfırla
            setProductName('');
            setProductPrice('');
            setDiscount('');
            setImageFile(null);
        } catch (error) {
            console.error('Ürün eklenirken hata oluştu:', error);
        }
    };

    return (
        <form onSubmit={handleFormSubmit}>
            <input
                type="text"
                placeholder="Ürün Adı"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
            />
            <input
                type="number"
                placeholder="Fiyat"
                value={productPrice}
                onChange={(e) => setProductPrice(e.target.value)}
            />
            <input type="file" accept="image/*" onChange={handleImageChange} />
            <input
                type="number"
                placeholder="İndirim"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
            />
            <input type="text"
            placeholder='setCategories'
            value={categories}
            onChange={(e)=>setCategories(e.target.value)} />
            <button type="submit">Ürün Ekle</button>
        </form>
    );
}

export default AdminPage;
