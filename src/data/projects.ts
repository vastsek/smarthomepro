// Αρχείο: src/data/projects.ts
//
// TODO (ΣΗΜΑΝΤΙΚΟ): Οι εικόνες παρακάτω είναι προσωρινές (stock από Unsplash),
// μέχρι να ανέβουν πραγματικές φωτογραφίες από κάθε έργο.
// Αντικατέστησε το `image` με το path της πραγματικής φωτογραφίας
// (π.χ. "/images/projects/filothei.jpg") μόλις είναι διαθέσιμη.

export interface Project {
	slug: string;
	title: string;
	location: string;
	category: string;
	tags: string[];
	description: string;
	image: string;
}

export const projects: Project[] = [
	{
		slug: 'monokatoikia-filothei',
		title: 'Μονοκατοικία στη Φιλοθέη',
		location: 'Φιλοθέη',
		category: 'Οικιακός Αυτοματισμός',
		tags: ['KNX', 'Home Assistant'],
		description: 'Πλήρης αυτοματισμός μονοκατοικίας με έλεγχο μέσω mobile app: γκαραζόπορτα, πισίνα, υπνοδωμάτια και ενδοδαπέδια θέρμανση, όλα από ένα σημείο.',
		image: 'https://images.unsplash.com/photo-1613545325278-f24b0cae1224?q=80&w=1200&auto=format&fit=crop',
	},
	{
		slug: 'katoikia-glyfada',
		title: 'Κατοικία στη Γλυφάδα',
		location: 'Γλυφάδα',
		category: 'Οικιακός Αυτοματισμός',
		tags: ['KNX', 'ComfortClick'],
		description: 'Αυτοματισμός φωτισμού, κήπου, πάρκινγκ, ρολών και θέρμανσης μέσω ComfortClick, με ενιαίο έλεγχο για όλο το ακίνητο.',
		image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&auto=format&fit=crop',
	},
	{
		slug: 'grafeia-ag-dimitrios',
		title: 'Γραφειακός Αυτοματισμός στον Άγ. Δημήτριο',
		location: 'Άγιος Δημήτριος',
		category: 'Επαγγελματικός Χώρος',
		tags: ['KNX', 'ABB'],
		description: 'Έλεγχος φωτισμού γραφείων, εξωτερικών χώρων και κήπου μέσω mobile app, προσαρμοσμένος στις ανάγκες καθημερινής λειτουργίας ενός επαγγελματικού χώρου.',
		image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop',
	},
	{
		slug: 'domimeni-kalodiosi-vyronas',
		title: 'Δομημένη Καλωδίωση στον Βύρωνα',
		location: 'Βύρωνας',
		category: 'Δίκτυα & Υποδομή',
		tags: ['Δομημένη Καλωδίωση', 'Rack'],
		description: 'Τερματισμός γραμμών δομημένης καλωδίωσης και εγκατάσταση καμπίνας rack με πλήρη δικτυακό εξοπλισμό σε τεχνικό γραφείο.',
		image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1200&auto=format&fit=crop',
	},
	{
		slug: 'cctv-sepolia',
		title: 'Σύστημα CCTV σε Αλυσίδα Καταστημάτων',
		location: 'Σεπόλια',
		category: 'Ασφάλεια & Παρακολούθηση',
		tags: ['CCTV'],
		description: 'Εγκατάσταση κλειστού κυκλώματος παρακολούθησης σε πολλαπλά σημεία αλυσίδας καταστημάτων, με κεντρική διαχείριση και απομακρυσμένη πρόσβαση.',
		image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?q=80&w=1200&auto=format&fit=crop',
	},
];
