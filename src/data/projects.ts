// Αρχείο: src/data/projects.ts
//
// Οι εικόνες των 3 KNX έργων (Φιλοθέη, Γλυφάδα, Άγ. Δημήτριος) είναι screenshots
// του mobile app ελέγχου — δεν υπάρχουν ακόμα πραγματικές φωτογραφίες του χώρου.
// Πρόσθεσε νέες φωτογραφίες: βάλε το αρχείο στο src/assets/images/projects/<έργο>/
// και πρόσθεσε entry στο αντίστοιχο `gallery` array με img('<έργο>/<αρχείο>').

import type { ImageMetadata } from 'astro';

// Όλες οι εικόνες έργων φορτώνονται από το src/assets ώστε να περνούν από το
// Astro image optimization (WebP, srcset, width/height).
const projectImages = import.meta.glob<{ default: ImageMetadata }>(
	'../assets/images/projects/**/*.{jpg,png}',
	{ eager: true }
);

function img(path: string): ImageMetadata {
	const mod = projectImages[`../assets/images/projects/${path}`];
	if (!mod) throw new Error(`Λείπει η εικόνα έργου: src/assets/images/projects/${path}`);
	return mod.default;
}

export interface GalleryImage {
	src: ImageMetadata;
	caption: string;
	// Παρακάμπτει το imageFit του έργου για τη συγκεκριμένη εικόνα.
	// Χρήσιμο όταν σε ένα gallery συνυπάρχουν φωτογραφίες (cover) με
	// screenshots του app (contain).
	fit?: 'cover' | 'contain';
}

// Δομημένο περιεχόμενο για αναλυτικά case studies (π.χ. έργα εν εξελίξει χωρίς φωτο).
export interface ProjectSection {
	heading: string;
	body?: string;
	points?: { label: string; text: string }[];
}

export interface ProjectSpec {
	label: string;
	value: string;
}

export interface Project {
	slug: string;
	title: string;
	location: string;
	category: string;
	tags: string[];
	description: string;
	longDescription: string;
	gallery: GalleryImage[];
	imageFit?: 'cover' | 'contain';
	// 'in-progress' => εμφανίζεται badge «Εν εξελίξει» και placeholder αντί για φωτο.
	status?: 'completed' | 'in-progress';
	// Προαιρετικές ενότητες/προδιαγραφές για πιο αναλυτική σελίδα έργου.
	sections?: ProjectSection[];
	specs?: ProjectSpec[];
}

export const projects: Project[] = [
	{
		slug: 'ypersyghroni-katoikia-600',
		title: 'Υπερσύγχρονη Κατοικία 600 τ.μ.',
		location: 'Αττική',
		category: 'Οικιακός Αυτοματισμός',
		tags: ['KNX', 'HVAC', 'Ubiquiti'],
		status: 'in-progress',
		description: 'Ολοκληρωμένη ενοποίηση φωτισμού, προηγμένου κλιματισμού, σκίασης και δικτύου Ubiquiti σε πολυτελή κατοικία 600 τ.μ., με κεντρικό έλεγχο από ένα custom dashboard.',
		longDescription: 'Σε αυτή την πολυτελή κατοικία 600 τ.μ., η αποστολή μας είναι η δημιουργία ενός «αόρατου» τεχνολογικού υποβάθρου που εξυπηρετεί απόλυτα την καθημερινότητα των ενοίκων. Υλοποιούμε την πλήρη ενοποίηση του φωτισμού, του προηγμένου κλιματισμού, των εξωτερικών εγκαταστάσεων και της ασφάλειας, παραδίδοντας ένα κεντρικά ελεγχόμενο περιβάλλον, βασισμένο στο πρωτόκολλο KNX και σε enterprise-grade δικτυακές υποδομές.',
		gallery: [],
		sections: [
			{
				heading: 'Απαιτήσεις Πελάτη & Τεχνικές Προδιαγραφές',
				body: 'Η προσέγγισή μας καθορίστηκε αυστηρά από τις τεχνικές προδιαγραφές του έργου και τις ανάγκες του πελάτη. Η βασική απαίτηση ήταν η απρόσκοπτη διαχείριση ενός τεράστιου όγκου δεδομένων και φορτίων (εσωτερικών και εξωτερικών χώρων) χωρίς την παρουσία πολύπλοκων χειριστηρίων στους τοίχους. Επιπλέον, ο αρχιτεκτονικός σχεδιασμός επέβαλε την αρμονική συνεργασία συστημάτων διαφορετικών κατασκευαστών (αντλίες θερμότητας, μονάδες κλιματισμού, σύστημα πισίνας) και την ενσωμάτωσή τους σε ένα ενιαίο, αδιάλειπτο δίκτυο υψηλών ταχυτήτων.',
			},
			{
				heading: 'Η Αρχιτεκτονική της Λύσης',
				body: 'Για να καλυφθούν οι απαιτητικές προδιαγραφές, σχεδιάσαμε και υλοποιούμε την ακόλουθη αρχιτεκτονική:',
				points: [
					{ label: 'Κεντρικός Έλεγχος & Φωτισμός', text: 'Η ραχοκοκαλιά του συστήματος βασίζεται στο πρωτόκολλο KNX. Υλοποιείται έλεγχος φωτισμού On/Off για τα βασικά φορτία και ενσωμάτωση DALI για απόλυτη ακρίβεια στο dimming, περιλαμβάνοντας τον αρχιτεκτονικό φωτισμό και τα RGBW σενάρια της πισίνας και του jacuzzi.' },
					{ label: 'Σύνθετο Σύστημα HVAC', text: 'Ο έλεγχος του κλίματος αποτελεί μία από τις μεγαλύτερες τεχνικές προκλήσεις. Ενοποιούμε την ενδοδαπέδια θέρμανση και τον δροσισμό (μέσω αντλίας θερμότητας) με τις τοπικές κλιματιστικές μονάδες, αξιοποιώντας εξειδικευμένα KNX gateways της Intesis — για μέγιστη ενεργειακή απόδοση και αποφυγή συγκρούσεων μεταξύ ψύξης και θέρμανσης.' },
					{ label: 'Αυτοματισμοί Υποδομών & Σκίαση', text: 'Εγκαθίσταται μετεωρολογικός σταθμός (Weather Station) στο δώμα, ο οποίος τροφοδοτεί με πραγματικά δεδομένα το σύστημα KNX για τον αυτόματο έλεγχο των roller σκίασης και των κουρτινών.' },
					{ label: 'Custom Λειτουργίες Άνεσης', text: 'Ενσωματώνουμε εξειδικευμένους αυτοματισμούς: έλεγχο ανεμιστήρων οροφής τριών ταχυτήτων, διακοπτόμενες πρίζες, πετσετοκρεμάστρες με χρονοδιακόπτες και πλήρως αυτοματοποιημένο σύστημα άρδευσης με βάση χρονοπρογράμματα και καιρικές συνθήκες.' },
					{ label: 'Δίκτυο & Ασφάλεια (Ubiquiti)', text: 'Σχεδιάσαμε και εγκαθιστούμε ένα πλήρες οικοσύστημα Ubiquiti: τοπικό δίκτυο (LAN/Wi-Fi), routers, έλεγχο πρόσβασης (Access Control) και σύστημα παρακολούθησης NVR με κάμερες ασφαλείας — ενοποιημένα για απόλυτη σταθερότητα και ασφάλεια.' },
				],
			},
			{
				heading: 'Οπτικοποίηση & Εμπειρία Χρήστη',
				body: 'Όλη αυτή η ηλεκτρομηχανολογική πολυπλοκότητα «μεταφράζεται» σε ένα απλό, φιλικό περιβάλλον χρήστη. Ο ιδιοκτήτης ελέγχει τα πάντα — από τη θερμοκρασία του jacuzzi μέχρι τις κάμερες και τα σενάρια αποχώρησης — μέσα από ένα κεντρικό, custom dashboard σε οθόνες αφής και στο κινητό. Παράλληλα, η ισχυρή δικτυακή υποδομή επιτρέπει στην ομάδα μας ασφαλή απομακρυσμένη διαχείριση (remote commissioning) και διαγνωστικά, διασφαλίζοντας την αδιάλειπτη λειτουργία της κατοικίας.',
			},
		],
		specs: [
			{ label: 'Μέγεθος Έργου', value: '~600 τ.μ.' },
			{ label: 'Κεντρικό Πρωτόκολλο', value: 'KNX' },
			{ label: 'Φωτισμός', value: 'DALI, KNX On/Off, RGBW (πισίνα & jacuzzi)' },
			{ label: 'Κλιματισμός (HVAC)', value: 'Αντλία θερμότητας (ενδοδαπέδια/δροσισμός), μονάδες A/C μέσω Intesis gateways' },
			{ label: 'Σκίαση', value: 'KNX motors (rollers & κουρτίνες), αυτοματισμός μέσω Weather Station' },
			{ label: 'Δίκτυο & Security', value: 'Πλήρες οικοσύστημα Ubiquiti (LAN, Wi-Fi, router, cameras, NVR, access control)' },
			{ label: 'Ειδικές Λειτουργίες', value: 'Αυτόματο πότισμα (schedules), διακοπτόμενες πρίζες, πετσετοκρεμάστρες (timers), ανεμιστήρες οροφής 3 ταχυτήτων' },
		],
	},
	{
		slug: 'monokatoikia-filothei',
		title: 'Μονοκατοικία στη Φιλοθέη',
		location: 'Φιλοθέη',
		category: 'Οικιακός Αυτοματισμός',
		tags: ['KNX', 'Home Assistant'],
		description: 'Πλήρης αυτοματισμός μονοκατοικίας με έλεγχο μέσω mobile app: γκαραζόπορτα, πισίνα, υπνοδωμάτια και ενδοδαπέδια θέρμανση, όλα από ένα σημείο.',
		longDescription: 'Ολοκληρωμένη εγκατάσταση KNX σε μονοκατοικία, με ενοποιημένο έλεγχο μέσω Home Assistant. Η οικογένεια διαχειρίζεται φωτισμό, θέρμανση ανά όροφο, γκαραζόπορτα και πισίνα (φωτισμός RGB, θέρμανση, ποιότητα νερού) μέσα από ένα ενιαίο mobile dashboard, με ζωντανή εικόνα από κάμερα ασφαλείας.',
		imageFit: 'contain',
		gallery: [
			{ src: img('filothei/mobile-app-ha-photo5.jpg'), caption: 'Κεντρικό dashboard με γρήγορη πρόσβαση σε όλες τις λειτουργίες' },
			{ src: img('filothei/mobile-app-ha-photo1.jpg'), caption: 'Γκαραζόπορτα, καιρός και ζωντανή εικόνα κάμερας' },
			{ src: img('filothei/mobile-app-ha-photo2.jpg'), caption: 'Φωτισμός πισίνας (RGB) και θέρμανση πισίνας' },
			{ src: img('filothei/mobile-app-ha-photo4.jpg'), caption: 'Θέρμανση ανά όροφο (υπόγειο, ισόγειο, 1ος, 2ος)' },
			{ src: img('filothei/mobile-app-ha-photo3.jpg'), caption: 'Ξεχωριστός έλεγχος φωτισμού ανά δωμάτιο' },
			{ src: img('filothei/mobile-app-ha-photo6.jpg'), caption: 'Αναλυτικός έλεγχος φωτισμού κήπου και κύριου ορόφου' },
		],
	},
	{
		slug: 'katoikia-glyfada',
		title: 'Κατοικία στη Γλυφάδα',
		location: 'Γλυφάδα',
		category: 'Οικιακός Αυτοματισμός',
		tags: ['KNX', 'ABB', 'ComfortClick'],
		description: 'Ολοκληρωμένος αυτοματισμός σύγχρονης κατοικίας: φωτισμός, μηχανοκίνητες κουρτίνες, ρολά, πισίνα και θέρμανση, με κομψά KNX keypads και ενιαίο έλεγχο μέσω ComfortClick.',
		longDescription: 'Πλήρης αυτοματισμός σύγχρονης μονοκατοικίας με σύστημα KNX και οπτικοποίηση μέσω ComfortClick. Η εγκατάσταση συνδυάζει κομψά keypads της ABB, εναρμονισμένα με τα υλικά του χώρου, με αρχιτεκτονικό κρυφό φωτισμό LED, μηχανοκίνητες κουρτίνες, σενάρια φωτισμού, θέρμανση Daikin ανά όροφο και έλεγχο της εξωτερικής πισίνας με RGB υποβρύχιο φωτισμό. Ενσωματώθηκε επίσης σύστημα ασφαλείας και θυροτηλεόρασης Paradox, όλα προσβάσιμα από ένα ενιαίο interface.',
		imageFit: 'cover',
		gallery: [
			{ src: img('glyfada/pool-night.jpg'), caption: 'Εξωτερική πισίνα με RGB υποβρύχιο φωτισμό, ενταγμένη στον αυτοματισμό του σπιτιού' },
			{ src: img('glyfada/bedroom-headboard.jpg'), caption: 'Κρεβατοκάμαρα: κρυφός φωτισμός κεφαλαριού και διακριτικά κρεμαστά φωτιστικά' },
			{ src: img('glyfada/entrance-night.jpg'), caption: 'Είσοδος με αρχιτεκτονικό κρυφό LED και ενσωματωμένη κάμερα ασφαλείας' },
			{ src: img('glyfada/bedroom-curtains.jpg'), caption: 'Μηχανοκίνητες κουρτίνες (διπλό στρώμα) και σενάριο φωτισμού βραδιού' },
			{ src: img('glyfada/kids-room.jpg'), caption: 'Παιδικό δωμάτιο με κρυφό φωτισμό LED σε ραφιέρα και γραφείο' },
			{ src: img('glyfada/keypad-detail.jpg'), caption: 'Κομψό KNX keypad της ABB, εναρμονισμένο με τα υλικά του χώρου' },
			{ src: img('glyfada/mobile-app-cc-photo1.jpg'), caption: 'Οπτικοποίηση ComfortClick: φωτισμός σπιτιού ανά χώρο (είσοδος, σκάλες, σαλόνι, υπόγειο)', fit: 'contain' },
			{ src: img('glyfada/mobile-app-cc-photo2.jpg'), caption: 'Οπτικοποίηση ComfortClick: φωτισμός εισόδου με ξεχωριστό έλεγχο ασφαλείας', fit: 'contain' },
			{ src: img('glyfada/mobile-app-cc-photo3.jpg'), caption: 'Οπτικοποίηση ComfortClick: φωτισμός κήπου και πισίνας', fit: 'contain' },
			{ src: img('glyfada/mobile-app-cc-photo4.jpg'), caption: 'Οπτικοποίηση ComfortClick: φωτισμός και έλεγχος πάρκινγκ', fit: 'contain' },
			{ src: img('glyfada/mobile-app-cc-photo5.jpg'), caption: 'Οπτικοποίηση ComfortClick: έλεγχος ρολών ανά δωμάτιο', fit: 'contain' },
			{ src: img('glyfada/mobile-app-cc-photo6.jpg'), caption: 'Οπτικοποίηση ComfortClick: θερμοστάτης ορόφου (HVAC)', fit: 'contain' },
		],
	},
	{
		slug: 'grafeia-ag-dimitrios',
		title: 'Γραφειακός Αυτοματισμός στον Άγ. Δημήτριο',
		location: 'Άγιος Δημήτριος',
		category: 'Επαγγελματικός Χώρος',
		tags: ['KNX', 'ABB'],
		description: 'Έλεγχος φωτισμού γραφείων, εξωτερικών χώρων και κήπου μέσω mobile app, προσαρμοσμένος στις ανάγκες καθημερινής λειτουργίας ενός επαγγελματικού χώρου.',
		longDescription: 'Αυτοματισμός φωτισμού σε επαγγελματικό χώρο με εξοπλισμό ABB, σχεδιασμένος γύρω από την καθημερινή λειτουργία ενός γραφείου: ξεχωριστός έλεγχος για γραφεία, αποθήκη, κήπο και εξωτερικούς χώρους, με εύκολη πρόσβαση μέσω mobile app για το προσωπικό.',
		imageFit: 'contain',
		gallery: [
			{ src: img('ag-dimitrios/mobile-app-abb-photo2.png'), caption: 'Φωτισμός γραφείων μηχανικών' },
			{ src: img('ag-dimitrios/mobile-app-abb-photo1.png'), caption: 'Φωτισμός αποθήκης ανά διάδρομο' },
			{ src: img('ag-dimitrios/mobile-app-abb-photo3.png'), caption: 'Φωτισμός κήπου' },
			{ src: img('ag-dimitrios/mobile-app-abb-photo4.png'), caption: 'Εξωτερικός φωτισμός κτιρίου' },
		],
	},
	{
		slug: 'domimeni-kalodiosi-vyronas',
		title: 'Δομημένη Καλωδίωση στον Βύρωνα',
		location: 'Βύρωνας',
		category: 'Δίκτυα & Υποδομή',
		tags: ['Δομημένη Καλωδίωση', 'Rack'],
		description: 'Τερματισμός γραμμών δομημένης καλωδίωσης και εγκατάσταση καμπίνας rack με πλήρη δικτυακό εξοπλισμό σε τεχνικό γραφείο.',
		longDescription: 'Πλήρης εγκατάσταση δικτυακής υποδομής σε τεχνικό γραφείο: τερματισμός γραμμών δομημένης καλωδίωσης CAT.6+, καμπίνα rack με patch panels, network switch, VPN router και NAS, οργανωμένα για εύκολη μελλοντική επέκταση και συντήρηση.',
		imageFit: 'cover',
		gallery: [
			{ src: img('vyronas/rack-photo1.jpg'), caption: 'Καμπίνα rack με πλήρη δικτυακό εξοπλισμό' },
			{ src: img('vyronas/networks-photo1.jpg'), caption: 'Επαγγελματικός δικτυακός εξοπλισμός (TP-Link Omada)' },
		],
	},
	{
		slug: 'cctv-sepolia',
		title: 'Σύστημα CCTV σε Αλυσίδα Καταστημάτων',
		location: 'Σεπόλια',
		category: 'Ασφάλεια & Παρακολούθηση',
		tags: ['CCTV'],
		description: 'Εγκατάσταση κλειστού κυκλώματος παρακολούθησης σε πολλαπλά σημεία αλυσίδας καταστημάτων, με κεντρική διαχείριση και απομακρυσμένη πρόσβαση.',
		longDescription: 'Εγκατάσταση συστήματος CCTV σε καταστήματα αλυσίδας ρούχων, με πολλαπλές κάμερες ανά κατάστημα και κεντρική διαχείριση μέσω DVR. Η διαχείριση παρακολουθεί ζωντανά όλα τα σημεία ταυτόχρονα, με δυνατότητα απομακρυσμένης πρόσβασης από κινητό ή υπολογιστή.',
		imageFit: 'cover',
		gallery: [
			{ src: img('sepolia/dvr-liveview-photo1.jpg'), caption: 'Ζωντανή προβολή από 4 κάμερες ταυτόχρονα' },
			{ src: img('sepolia/cameras-photo1.jpg'), caption: 'Κάμερα ασφαλείας εγκατεστημένη σε κατάστημα' },
			{ src: img('sepolia/cameras-photo2.jpg'), caption: 'Κάλυψη εισόδου και χώρου καταστήματος' },
		],
	},
];
