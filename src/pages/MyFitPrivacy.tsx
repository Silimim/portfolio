import { Link } from "react-router-dom";

const MyFitPrivacy = () => {
    return (
        <section className={"myfit-page"}>
            <div className={"myfit-hero"}>
                <div className={"myfit-hero-glow"}/>
                <div className={"max-w-4xl mx-auto sm:px-16 px-8 !pt-[126px] pb-16 relative z-10"}>
                    <Link to={"/projects/myfit"} className={"myfit-back"}>
                        <span>←</span> Back to MyFit
                    </Link>
                    <h1 className={"myfit-title mt-6"}>
                        Privacy <span className={"myfit-gradient-text"}>Policy</span>
                    </h1>
                    <p className={"myfit-tagline mt-2"}>MyFit Android Application</p>
                    <p className={"text-white/60 text-sm mt-2"}>Last updated: June 13, 2026</p>
                </div>
            </div>

            <div className={"myfit-body"}>
                <div className={"max-w-4xl mx-auto sm:px-16 px-8 py-16"}>
                    <div className={"myfit-card prose-myfit"}>
                        <p>
                            This Privacy Policy describes how the MyFit mobile application
                            ("MyFit", "the app", "we", "us", or "our") handles information when
                            you use it. MyFit is developed and operated by Simone Baptiste as an
                            independent developer. By installing or using MyFit you agree to the
                            practices described below.
                        </p>

                        <h2>1. Summary</h2>
                        <p>
                            MyFit is designed to work <strong>offline</strong>. All workout
                            history, training cards, body measurements, recipes, and personal
                            settings are stored locally on your device in an on-device SQLite
                            database and in standard application preferences. We do not operate
                            our own server, we do not host an account system, and we do not
                            collect or sell your personal data.
                        </p>

                        <h2>2. Information collected by MyFit itself</h2>
                        <p>
                            The information you enter in MyFit — body weight, calories,
                            measurements, photos you optionally attach, training cards, workout
                            logs, recipes, notification preferences — is stored
                            <strong> only on your device</strong>. It is not transmitted to us and
                            is not accessible to us.
                        </p>
                        <p>
                            If you use the optional <strong>backup / export</strong> feature, an
                            archive of your local data is written to a location you choose
                            (device storage or a sharing target you select). You are in full
                            control of where that archive goes.
                        </p>

                        <h2>3. Permissions used</h2>
                        <ul>
                            <li>
                                <strong>Storage / Photos</strong> — to let you attach a profile
                                picture or progress photos, which are kept locally on your device.
                            </li>
                            <li>
                                <strong>Notifications</strong> — to deliver local reminders (rest
                                timers, workout reminders) scheduled by you. No content is sent
                                over a network.
                            </li>
                            <li>
                                <strong>Vibration</strong> — to provide haptic feedback during
                                workouts and rest timers.
                            </li>
                            <li>
                                <strong>Picture-in-Picture</strong> — to keep the workout timer
                                visible while you use other apps.
                            </li>
                            <li>
                                <strong>Internet</strong> — required by third-party SDKs listed
                                in section 4 (advertising, purchases, ad-personalization
                                consent).
                            </li>
                        </ul>

                        <h2>4. Third-party services</h2>
                        <p>
                            MyFit integrates the following third-party SDKs. Each provider acts as
                            an independent data controller for the data they process, and is
                            governed by its own privacy policy.
                        </p>
                        <ul>
                            <li>
                                <strong>Google AdMob / Google Mobile Ads SDK</strong> — used to
                                display banner and native ads to non-premium users. AdMob may
                                collect device identifiers (such as the Android Advertising ID),
                                coarse location derived from IP, ad interaction data and crash
                                diagnostics in order to serve and measure ads. See{" "}
                                <a
                                    href={"https://policies.google.com/privacy"}
                                    target={"_blank"}
                                    rel={"noopener noreferrer"}
                                >
                                    Google's Privacy Policy
                                </a>
                                .
                            </li>
                            <li>
                                <strong>Google User Messaging Platform (UMP) / Consent</strong> —
                                used in regions where applicable law requires a consent prompt
                                (e.g. EEA, UK, Switzerland) for personalized advertising. Your
                                consent choice is stored on-device and forwarded to ad partners
                                via the IAB Transparency &amp; Consent Framework.
                            </li>
                            <li>
                                <strong>RevenueCat (purchases_flutter)</strong> — used to manage
                                in-app subscriptions for MyFit Premium. RevenueCat receives an
                                anonymous app-user ID and purchase events to validate
                                entitlements. See{" "}
                                <a
                                    href={"https://www.revenuecat.com/privacy"}
                                    target={"_blank"}
                                    rel={"noopener noreferrer"}
                                >
                                    RevenueCat's Privacy Policy
                                </a>
                                .
                            </li>
                            <li>
                                <strong>Google Play Billing</strong> — processes any premium
                                subscription purchase. Payment information is handled entirely by
                                Google Play; MyFit never sees your payment details.
                            </li>
                        </ul>

                        <h2>5. Children's privacy</h2>
                        <p>
                            MyFit is not directed to children under 13 (or the applicable age in
                            your country). We do not knowingly collect personal information from
                            children. If you believe a child has provided personal data through
                            the app, please contact us so the situation can be addressed.
                        </p>

                        <h2>6. Your choices &amp; rights</h2>
                        <ul>
                            <li>
                                <strong>Delete your data</strong> — uninstalling MyFit removes all
                                local data. You can also clear data from Android settings, or use
                                in-app reset options where provided.
                            </li>
                            <li>
                                <strong>Reset advertising ID</strong> — you can reset or limit the
                                Android Advertising ID from your device's Google settings.
                            </li>
                            <li>
                                <strong>Withdraw ad-personalization consent</strong> — re-open
                                the consent prompt from the in-app settings to update your
                                choice.
                            </li>
                            <li>
                                <strong>Cancel subscription</strong> — manage or cancel MyFit
                                Premium any time from Google Play &gt; Subscriptions.
                            </li>
                        </ul>

                        <h2>7. Data security</h2>
                        <p>
                            Local data is protected by the standard Android application sandbox
                            and by your device's security. Sensitive credentials (where
                            applicable) are stored using Flutter Secure Storage, which relies on
                            the Android Keystore. No security measure can be guaranteed perfect,
                            so please keep your device and OS up to date.
                        </p>

                        <h2>8. Changes to this policy</h2>
                        <p>
                            We may update this Privacy Policy from time to time to reflect
                            changes to the app, the SDKs it uses, or applicable law. The "Last
                            updated" date at the top of this page reflects the latest revision.
                            Continued use of the app after changes constitutes acceptance.
                        </p>

                        <h2>9. Contact</h2>
                        <p>
                            For any question about this Privacy Policy or about how MyFit handles
                            data, contact the developer at:{" "}
                            <a href={"mailto:baptistesimone19@gmail.com"}>
                                baptistesimone19@gmail.com
                            </a>
                            .
                        </p>
                    </div>

                    <div className={"flex flex-wrap gap-3 mt-8"}>
                        <Link to={"/projects/myfit"} className={"myfit-btn-ghost"}>
                            ← Back to MyFit
                        </Link>
                        <a
                            href={"/portfolio/app-ads.txt"}
                            target={"_blank"}
                            rel={"noopener noreferrer"}
                            className={"myfit-btn-ghost"}
                        >
                            View app-ads.txt
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyFitPrivacy;
