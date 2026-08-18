import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import Container from "@/components/ui/Container";
import { companyRequisites } from "@/data/company";

export const metadata: Metadata = {
  title: "Политика обработки персональных данных | ЧОК",
  description:
    "Политика обработки персональных данных Челябинской Оконной Компании в соответствии с 152-ФЗ «О персональных данных».",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-white py-10 md:py-16">
          <Container>
            <Breadcrumbs
              items={[
                { label: "Главная", href: "/" },
                { label: "Политика конфиденциальности" },
              ]}
            />

            <h1 className="mt-5 text-[28px] md:text-[36px] font-extrabold tracking-tight text-foreground">
              Политика обработки персональных данных
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
                  Настоящая политика обработки персональных данных (далее -
                  «Политика») составлена в соответствии с требованиями
                  Федерального закона от 27.07.2006 № 152-ФЗ «О персональных
                  данных» и действует в отношении всех персональных данных,
                  которые {companyRequisites.legalName} (далее - «Оператор»)
                  может получить от пользователя сайта{" "}
                  <span className="whitespace-nowrap">chok74.ru</span> (далее
                  - «Сайт») в процессе его использования.
                </p>
              </section>

              <section>
                <h2 className="text-[19px] font-bold text-foreground">
                  2. Оператор персональных данных
                </h2>
                <ul className="mt-3 flex flex-col gap-1.5 text-muted">
                  <li>{companyRequisites.legalName}</li>
                  <li>ИНН: {companyRequisites.inn}</li>
                  <li>ОГРНИП: {companyRequisites.ogrn}</li>
                  <li>Юридический адрес: {companyRequisites.legalAddress}</li>
                  <li>Телефон: {companyRequisites.phone}</li>
                  <li>Email: {companyRequisites.email}</li>
                </ul>
              </section>

              <section>
                <h2 className="text-[19px] font-bold text-foreground">
                  3. Какие данные собираются
                </h2>
                <p className="mt-3 text-muted">
                  При заполнении форм на Сайте (заказ звонка, заявка на
                  бесплатный замер) Оператор может обрабатывать следующие
                  персональные данные пользователя:
                </p>
                <ul className="mt-3 flex flex-col gap-1.5 text-muted list-disc pl-5">
                  <li>имя;</li>
                  <li>номер телефона.</li>
                </ul>
                <p className="mt-3 text-muted">
                  Также автоматически может обрабатываться обезличенная
                  техническая информация (тип устройства, браузер,
                  IP-адрес) в целях анализа работы Сайта.
                </p>
              </section>

              <section>
                <h2 className="text-[19px] font-bold text-foreground">
                  4. Цели обработки персональных данных
                </h2>
                <ul className="mt-3 flex flex-col gap-1.5 text-muted list-disc pl-5">
                  <li>
                    обработка заявок на консультацию, обратный звонок и
                    бесплатный замер;
                  </li>
                  <li>
                    связь с пользователем, в том числе направление
                    уведомлений, запросов и информации, связанных с оказанием
                    услуг;
                  </li>
                  <li>подготовка и заключение договора на оказание услуг;</li>
                  <li>улучшение качества работы Сайта и сервиса.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-[19px] font-bold text-foreground">
                  5. Правовые основания обработки
                </h2>
                <p className="mt-3 text-muted">
                  Обработка персональных данных осуществляется с согласия
                  пользователя, которое даётся при заполнении формы на Сайте
                  путём проставления отметки согласия, а также в иных
                  случаях, прямо предусмотренных законодательством РФ.
                </p>
              </section>

              <section>
                <h2 className="text-[19px] font-bold text-foreground">
                  6. Порядок и сроки обработки и хранения
                </h2>
                <p className="mt-3 text-muted">
                  Обработка персональных данных осуществляется с
                  использованием средств автоматизации и без таковых.
                  Персональные данные хранятся на серверах, расположенных на
                  территории Российской Федерации, не дольше срока, необходимого
                  для достижения целей обработки, либо до отзыва согласия
                  субъектом персональных данных.
                </p>
              </section>

              <section>
                <h2 className="text-[19px] font-bold text-foreground">
                  7. Передача данных третьим лицам
                </h2>
                <p className="mt-3 text-muted">
                  Оператор не передаёт персональные данные третьим лицам, за
                  исключением случаев, прямо предусмотренных
                  законодательством РФ, либо привлечения подрядчиков,
                  обеспечивающих работу Сайта и обработку заявок, действующих
                  на основании обязательств о конфиденциальности.
                </p>
              </section>

              <section>
                <h2 className="text-[19px] font-bold text-foreground">
                  8. Права субъекта персональных данных
                </h2>
                <p className="mt-3 text-muted">Пользователь вправе:</p>
                <ul className="mt-3 flex flex-col gap-1.5 text-muted list-disc pl-5">
                  <li>
                    получать информацию, касающуюся обработки его
                    персональных данных;
                  </li>
                  <li>
                    требовать уточнения, блокирования или уничтожения своих
                    персональных данных в случае, если они неполны,
                    устарели, недостоверны или получены незаконно;
                  </li>
                  <li>
                    в любой момент отозвать согласие на обработку
                    персональных данных, направив запрос на email{" "}
                    {companyRequisites.email} или позвонив по телефону{" "}
                    {companyRequisites.phone}.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-[19px] font-bold text-foreground">
                  9. Меры защиты персональных данных
                </h2>
                <p className="mt-3 text-muted">
                  Оператор принимает необходимые организационные и
                  технические меры для защиты персональных данных от
                  неправомерного или случайного доступа, уничтожения,
                  изменения, блокирования, копирования, распространения, а
                  также от иных неправомерных действий третьих лиц.
                </p>
              </section>

              <section>
                <h2 className="text-[19px] font-bold text-foreground">
                  10. Заключительные положения
                </h2>
                <p className="mt-3 text-muted">
                  Оператор вправе вносить изменения в настоящую Политику.
                  Новая редакция Политики вступает в силу с момента её
                  размещения на Сайте, если иное не предусмотрено новой
                  редакцией. По всем вопросам, связанным с обработкой
                  персональных данных, можно обратиться по контактам,
                  указанным в разделе 2 настоящей Политики.
                </p>
              </section>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
