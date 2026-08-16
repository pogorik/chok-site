import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Container from "@/components/ui/Container";
import { companyRequisites } from "@/data/company";

export const metadata: Metadata = {
  title: "Публичная оферта | ЧОК",
  description:
    "Договор публичной оферты на оказание услуг по установке пластиковых окон, остеклению балконов и алюминиевым конструкциям.",
};

export default function OfferPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-white py-10 md:py-16">
          <Container>
            <Breadcrumbs
              items={[
                { label: "Главная", href: "/" },
                { label: "Публичная оферта" },
              ]}
            />

            <h1 className="mt-5 text-[28px] md:text-[36px] font-extrabold tracking-tight text-foreground">
              Публичная оферта на оказание услуг
            </h1>
            <p className="mt-3 text-[14px] text-muted">
              Редакция от {new Date().toLocaleDateString("ru-RU")}
            </p>

            <div className="mt-8 max-w-[760px] flex flex-col gap-8 text-[15px] leading-relaxed text-foreground">
              <section>
                <h2 className="text-[19px] font-bold text-foreground">
                  1. Общие положения
                </h2>
                <p className="mt-3 text-muted">
                  Настоящий документ является публичной офертой{" "}
                  {companyRequisites.legalName} (далее - «Исполнитель») и
                  содержит условия оказания услуг по производству, продаже и
                  установке пластиковых окон, остеклению балконов и лоджий,
                  входных групп и алюминиевых конструкций. Оформление заявки
                  на сайте, по телефону или согласование замера означает
                  полное и безоговорочное принятие (акцепт) условий настоящей
                  оферты заказчиком.
                </p>
              </section>

              <section>
                <h2 className="text-[19px] font-bold text-foreground">
                  2. Предмет оферты
                </h2>
                <p className="mt-3 text-muted">
                  Исполнитель обязуется по заданию заказчика выполнить
                  работы по замеру, изготовлению и монтажу светопрозрачных
                  конструкций (окна ПВХ, балконное и лоджийное остекление,
                  входные группы, алюминиевые конструкции), а заказчик
                  обязуется принять и оплатить эти работы на условиях,
                  согласованных сторонами при заключении договора.
                </p>
              </section>

              <section>
                <h2 className="text-[19px] font-bold text-foreground">
                  3. Порядок расчёта стоимости
                </h2>
                <p className="mt-3 text-muted">
                  Стоимость, указанная в калькуляторе на Сайте, носит
                  предварительный ориентировочный характер и не является
                  публичной офертой в части цены. Точная стоимость работ
                  определяется индивидуально после бесплатного замера на
                  объекте заказчика и фиксируется в договоре и/или счёте на
                  оплату.
                </p>
              </section>

              <section>
                <h2 className="text-[19px] font-bold text-foreground">
                  4. Порядок оказания услуг
                </h2>
                <ol className="mt-3 flex flex-col gap-1.5 text-muted list-decimal pl-5">
                  <li>Приём заявки на сайте, по телефону или через форму обратного звонка.</li>
                  <li>Бесплатный выезд специалиста для замера и консультации.</li>
                  <li>Согласование точного расчёта стоимости и подписание договора.</li>
                  <li>Изготовление конструкций на производстве Исполнителя.</li>
                  <li>Доставка, монтаж и сдача работ заказчику.</li>
                </ol>
              </section>

              <section>
                <h2 className="text-[19px] font-bold text-foreground">
                  5. Права и обязанности сторон
                </h2>
                <p className="mt-3 text-muted">
                  Исполнитель обязуется выполнить работы качественно, в
                  согласованные сроки и в соответствии с техническими
                  требованиями. Заказчик обязуется предоставить доступ к
                  объекту для замера и монтажа, а также своевременно
                  оплатить услуги в порядке, согласованном сторонами.
                </p>
              </section>

              <section>
                <h2 className="text-[19px] font-bold text-foreground">
                  6. Гарантийные обязательства
                </h2>
                <p className="mt-3 text-muted">
                  Исполнитель предоставляет гарантию на изделия и монтажные
                  работы сроком до 10 лет. Конкретный гарантийный срок,
                  условия и порядок гарантийного обслуживания фиксируются в
                  договоре, заключаемом с заказчиком.
                </p>
              </section>

              <section>
                <h2 className="text-[19px] font-bold text-foreground">
                  7. Оплата
                </h2>
                <p className="mt-3 text-muted">
                  Порядок и способы оплаты (включая возможную предоплату и
                  окончательный расчёт после монтажа) согласовываются
                  сторонами индивидуально и фиксируются в договоре.
                </p>
              </section>

              <section>
                <h2 className="text-[19px] font-bold text-foreground">
                  8. Ответственность сторон
                </h2>
                <p className="mt-3 text-muted">
                  Стороны несут ответственность за неисполнение или
                  ненадлежащее исполнение своих обязательств в соответствии
                  с законодательством Российской Федерации, включая Закон РФ
                  «О защите прав потребителей».
                </p>
              </section>

              <section>
                <h2 className="text-[19px] font-bold text-foreground">
                  9. Срок действия оферты
                </h2>
                <p className="mt-3 text-muted">
                  Оферта действует бессрочно и может быть изменена
                  Исполнителем в одностороннем порядке путём публикации
                  новой редакции на Сайте.
                </p>
              </section>

              <section>
                <h2 className="text-[19px] font-bold text-foreground">
                  10. Реквизиты исполнителя
                </h2>
                <ul className="mt-3 flex flex-col gap-1.5 text-muted">
                  <li>{companyRequisites.legalName}</li>
                  <li>ИНН: {companyRequisites.inn}</li>
                  <li>ОГРН: {companyRequisites.ogrn}</li>
                  <li>Юридический адрес: {companyRequisites.legalAddress}</li>
                  <li>Телефон: {companyRequisites.phone}</li>
                  <li>Email: {companyRequisites.email}</li>
                </ul>
              </section>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
