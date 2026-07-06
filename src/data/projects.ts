// Αρχείο: src/data/projects.ts
//
// Οι εικόνες των 3 KNX έργων (Φιλοθέη, Γλυφάδα, Άγ. Δημήτριος) είναι screenshots
// του mobile app ελέγχου — δεν υπάρχουν ακόμα πραγματικές φωτογραφίες του χώρου.
// Πρόσθεσε νέες φωτογραφίες απλά προσθέτοντας entries στο αντίστοιχο `gallery` array.

export interface GalleryImage {
	src: string;
	caption: string;
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
}

export const projects: Project[] = [
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
			{ src: '/images/projects/filothei/mobile-app-ha-photo5.jpg', caption: 'Κεντρικό dashboard με γρήγορη πρόσβαση σε όλες τις λειτουργίες' },
			{ src: '/images/projects/filothei/mobile-app-ha-photo1.jpg', caption: 'Γκαραζόπορτα, καιρός και ζωντανή εικόνα κάμερας' },
			{ src: '/images/projects/filothei/mobile-app-ha-photo2.jpg', caption: 'Φωτισμός πισίνας (RGB) και θέρμανση πισίνας' },
			{ src: '/images/projects/filothei/mobile-app-ha-photo4.jpg', caption: 'Θέρμανση ανά όροφο (υπόγειο, ισόγειο, 1ος, 2ος)' },
			{ src: '/images/projects/filothei/mobile-app-ha-photo3.jpg', caption: 'Ξεχωριστός έλεγχος φωτισμού ανά δωμάτιο' },
			{ src: '/images/projects/filothei/mobile-app-ha-photo6.jpg', caption: 'Αναλυτικός έλεγχος φωτισμού κήπου και κύριου ορόφου' },
		],
	},
	{
		slug: 'katoikia-glyfada',
		title: 'Κατοικία στη Γλυφάδα',
		location: 'Γλυφάδα',
		category: 'Οικιακός Αυτοματισμός',
		tags: ['KNX', 'ComfortClick'],
		description: 'Αυτοματισμός φωτισμού, κήπου, πάρκινγκ, ρολών και θέρμανσης μέσω ComfortClick, με ενιαίο έλεγχο για όλο το ακίνητο.',
		longDescription: 'Πλήρης αυτοματισμός κατοικίας με πλατφόρμα ComfortClick. Ο ιδιοκτήτης ελέγχει ξεχωριστά τον φωτισμό εισόδου, κήπου και πισίνας, το πάρκινγκ, τα ρολά ανά δωμάτιο και τη θέρμανση ανά όροφο, μέσα από ένα ενιαίο, εύχρηστο interface.',
		imageFit: 'contain',
		gallery: [
			{ src: '/images/projects/glyfada/mobile-app-cc-photo1.jpg', caption: 'Φωτισμός σπιτιού ανά χώρο (είσοδος, σκάλες, σαλόνι, υπόγειο)' },
			{ src: '/images/projects/glyfada/mobile-app-cc-photo2.jpg', caption: 'Φωτισμός εισόδου με ξεχωριστό έλεγχο ασφαλείας' },
			{ src: '/images/projects/glyfada/mobile-app-cc-photo3.jpg', caption: 'Φωτισμός κήπου και πισίνας' },
			{ src: '/images/projects/glyfada/mobile-app-cc-photo4.jpg', caption: 'Φωτισμός και έλεγχος πάρκινγκ' },
			{ src: '/images/projects/glyfada/mobile-app-cc-photo5.jpg', caption: 'Έλεγχος ρολών ανά δωμάτιο' },
			{ src: '/images/projects/glyfada/mobile-app-cc-photo6.jpg', caption: 'Θερμοστάτης ορόφου (HVAC)' },
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
			{ src: '/images/projects/ag-dimitrios/mobile-app-abb-photo2.png', caption: 'Φωτισμός γραφείων μηχανικών' },
			{ src: '/images/projects/ag-dimitrios/mobile-app-abb-photo1.png', caption: 'Φωτισμός αποθήκης ανά διάδρομο' },
			{ src: '/images/projects/ag-dimitrios/mobile-app-abb-photo3.png', caption: 'Φωτισμός κήπου' },
			{ src: '/images/projects/ag-dimitrios/mobile-app-abb-photo4.png', caption: 'Εξωτερικός φωτισμός κτιρίου' },
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
			{ src: '/images/projects/vyronas/rack-photo1.jpg', caption: 'Καμπίνα rack με πλήρη δικτυακό εξοπλισμό' },
			{ src: '/images/projects/vyronas/networks-photo1.jpg', caption: 'Επαγγελματικός δικτυακός εξοπλισμός (TP-Link Omada)' },
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
			{ src: '/images/projects/sepolia/dvr-liveview-photo1.jpg', caption: 'Ζωντανή προβολή από 4 κάμερες ταυτόχρονα' },
			{ src: '/images/projects/sepolia/cameras-photo1.jpg', caption: 'Κάμερα ασφαλείας εγκατεστημένη σε κατάστημα' },
			{ src: '/images/projects/sepolia/cameras-photo2.jpg', caption: 'Κάλυψη εισόδου και χώρου καταστήματος' },
		],
	},
];
