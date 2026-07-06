// Αρχείο: src/data/projects.ts
//
// Οι εικόνες των 3 KNX έργων (Φιλοθέη, Γλυφάδα, Άγ. Δημήτριος) είναι screenshots
// του mobile app ελέγχου — δεν υπάρχουν ακόμα πραγματικές φωτογραφίες του χώρου.
// Αντικατέστησε το `image` με φωτογραφία χώρου (και βάλε imageFit: 'cover')
// μόλις γίνει διαθέσιμη.

export interface Project {
	slug: string;
	title: string;
	location: string;
	category: string;
	tags: string[];
	description: string;
	image: string;
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
		image: '/images/projects/filothei-app.jpg',
		imageFit: 'contain',
	},
	{
		slug: 'katoikia-glyfada',
		title: 'Κατοικία στη Γλυφάδα',
		location: 'Γλυφάδα',
		category: 'Οικιακός Αυτοματισμός',
		tags: ['KNX', 'ComfortClick'],
		description: 'Αυτοματισμός φωτισμού, κήπου, πάρκινγκ, ρολών και θέρμανσης μέσω ComfortClick, με ενιαίο έλεγχο για όλο το ακίνητο.',
		image: '/images/projects/glyfada-app.jpg',
		imageFit: 'contain',
	},
	{
		slug: 'grafeia-ag-dimitrios',
		title: 'Γραφειακός Αυτοματισμός στον Άγ. Δημήτριο',
		location: 'Άγιος Δημήτριος',
		category: 'Επαγγελματικός Χώρος',
		tags: ['KNX', 'ABB'],
		description: 'Έλεγχος φωτισμού γραφείων, εξωτερικών χώρων και κήπου μέσω mobile app, προσαρμοσμένος στις ανάγκες καθημερινής λειτουργίας ενός επαγγελματικού χώρου.',
		image: '/images/projects/ag-dimitrios-app.png',
		imageFit: 'contain',
	},
	{
		slug: 'domimeni-kalodiosi-vyronas',
		title: 'Δομημένη Καλωδίωση στον Βύρωνα',
		location: 'Βύρωνας',
		category: 'Δίκτυα & Υποδομή',
		tags: ['Δομημένη Καλωδίωση', 'Rack'],
		description: 'Τερματισμός γραμμών δομημένης καλωδίωσης και εγκατάσταση καμπίνας rack με πλήρη δικτυακό εξοπλισμό σε τεχνικό γραφείο.',
		image: '/images/projects/vyronas-rack.jpg',
		imageFit: 'cover',
	},
	{
		slug: 'cctv-sepolia',
		title: 'Σύστημα CCTV σε Αλυσίδα Καταστημάτων',
		location: 'Σεπόλια',
		category: 'Ασφάλεια & Παρακολούθηση',
		tags: ['CCTV'],
		description: 'Εγκατάσταση κλειστού κυκλώματος παρακολούθησης σε πολλαπλά σημεία αλυσίδας καταστημάτων, με κεντρική διαχείριση και απομακρυσμένη πρόσβαση.',
		image: '/images/projects/sepolia-cctv.jpg',
		imageFit: 'cover',
	},
];
