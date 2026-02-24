export default function ServicesSection() {
  return (
    <section id="services" className="py-24 px-6 md:px-20 bg-white" dir="rtl">
      
      {/* عنوان القسم */}
      <div className="text-center mb-20">
        <h2 className="text-4xl font-bold text-gray-900 mb-3">
          خدماتنا المتخصّصة
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          نقدم التميّز في كل جوانب البناء وتوريد المواد.
        </p>
      </div>

      {/* خدمة مميّزة */}
      <div className="flex flex-col lg:flex-row items-center gap-12 mb-28">
        {/* صورة توضيحية */}
        <div className="w-full lg:w-1/2 shadow-lg rounded-xl overflow-hidden">
          <div className="bg-gray-200 h-[300px] flex items-center justify-center text-gray-500 text-lg">
            <img src="/assets/quality-service.jpg" alt="خدمة ذات جودة عالية" className="object-contain"/>
          </div>
        </div>

        {/* نص الخدمة */}
        <div className="w-full lg:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">
            توريد أسمنت عالي الجودة
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            كركيزة في قسم التجارة لدينا، نضمن التوريد والتسليم الموثوق لأسمنت فائق الجودة في جميع أنحاء مصر.
            تضمن شبكة الخدمات اللوجستية خاصتنا وصول الشحنة إلى موقع مشروعك في المواعيد المحددة مع الحفاظ على أعلى
            معايير الجودة والكفاءة.
          </p>

          {/* زر طلب عرض سعر */}
          <a href="#contact">
            <button id="order-submit" className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-2 px-5 rounded-lg shadow-md transition-all">
              اطلب عرض سعر
            </button>
          </a>
        </div>
      </div>

      {/* شركاء الأسمنت */}
      <div className="bg-gray-100 py-16 px-6 rounded-2xl shadow-inner">
        <h3 className="text-center text-2xl font-bold text-gray-900 mb-10">
          شركاؤنا الموثوقون في الأسمنت
        </h3>

        {/* شبكة الشعارات */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-10 items-center justify-center">
          <div className="h-23 bg-white rounded-lg shadow flex justify-center items-center text-gray-500 text-sm">
            <img className="w-25 h-20 object-contain" src="/assets/beni-suef-icon.png" alt="مِصر للأسمنت - بني سويف" />
          </div>
          <div className="h-23 bg-white rounded-lg shadow flex justify-center items-center text-gray-500 text-sm">
            <img className="object-contain h-20" src="/assets/CEMEX_logo.png" alt="CEMEX" />
          </div>
          <div className="h-23 bg-white rounded-lg shadow flex justify-center items-center text-gray-500 text-sm">
            <img className="object-contain h-20" src="/assets/lafarge_logo_color.svg" alt="Lafarge" />
          </div>
          <div className="h-23 bg-white rounded-lg shadow flex justify-center items-center text-gray-500 text-sm">
            <img className="object-contain h-20" src="/assets/Misr-Cement-Beni-Suef.png" alt="Misr Cement Beni Suef" />
          </div>
        </div>
      </div>

    </section>
  );
}
