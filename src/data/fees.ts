import type { FeeItem } from "@/types";

export const feeCategories = [
  "PLN",
  "EDC Mini ATM",
  "Online Shop",
  "Telkom & Internet",
  "TV Kabel",
  "Kartu Pascabayar",
  "Multifinance",
  "Tiket KAI & Kapal Laut",
  "PBB",
  "Voucher & E-Money",
  "PDAM",
] as const;

export type FeeCategory = (typeof feeCategories)[number];

export const feeItems: FeeItem[] = [
  // ──────────────────────────────────────
  // PLN
  // ──────────────────────────────────────
  { product: "PLN", category: "PLN", admin: "Rp 3.200", fee: "Rp 650", status: "active" },
  { product: "PLN", category: "PLN", admin: "Rp 3.700", fee: "Rp 1.150", status: "active" },
  { product: "PLN", category: "PLN", admin: "Rp 3.800", fee: "Rp 1.250", status: "active" },
  { product: "PLN", category: "PLN", admin: "Rp 3.950", fee: "Rp 1.400", status: "active" },
  { product: "PLN", category: "PLN", admin: "Rp 4.000", fee: "Rp 1.450", status: "active" },
  { product: "PLN", category: "PLN", admin: "Rp 4.200", fee: "Rp 1.650", status: "active" },
  { product: "PLN", category: "PLN", admin: "Rp 4.300", fee: "Rp 1.750", status: "active" },
  { product: "PLN", category: "PLN", admin: "Rp 4.450", fee: "Rp 1.900", status: "active" },
  { product: "PLN", category: "PLN", admin: "Rp 4.500", fee: "Rp 1.950", status: "active" },
  { product: "PLN", category: "PLN", admin: "Rp 4.600", fee: "Rp 2.050", status: "active" },
  { product: "PLN", category: "PLN", admin: "Rp 4.700", fee: "Rp 2.150", status: "active" },
  { product: "PLN", category: "PLN", admin: "Rp 4.800", fee: "Rp 2.250", status: "active" },
  { product: "PLN", category: "PLN", admin: "Rp 4.850", fee: "Rp 2.300", status: "active" },
  { product: "PLN", category: "PLN", admin: "Rp 5.000", fee: "Rp 2.450", status: "active" },
  { product: "PLN", category: "PLN", admin: "Rp 5.200", fee: "Rp 2.650", status: "active" },
  { product: "PLN", category: "PLN", admin: "Rp 5.300", fee: "Rp 2.750", status: "active" },
  { product: "PLN", category: "PLN", admin: "Rp 5.700", fee: "Rp 3.050", status: "active" },
  { product: "PLN", category: "PLN", admin: "Rp 5.800", fee: "Rp 3.150", status: "active" },
  { product: "PLN", category: "PLN", admin: "Rp 6.200", fee: "Rp 3.550", status: "active" },
  { product: "PLN", category: "PLN", admin: "Rp 6.300", fee: "Rp 3.650", status: "active" },
  { product: "PLN", category: "PLN", admin: "Rp 6.700", fee: "Rp 4.050", status: "active" },
  { product: "PLN", category: "PLN", admin: "Rp 6.800", fee: "Rp 4.150", status: "active" },
  { product: "PLN", category: "PLN", admin: "Rp 7.200", fee: "Rp 4.550", status: "active" },
  { product: "PLN", category: "PLN", admin: "Rp 7.700", fee: "Rp 5.050", status: "active" },
  { product: "PLN", category: "PLN", admin: "Rp 8.200", fee: "Rp 5.550", status: "active" },
  { product: "PLN", category: "PLN", admin: "Rp 10.000", fee: "Rp 7.350", status: "active" },

  // ──────────────────────────────────────
  // EDC MINI ATM
  // ──────────────────────────────────────
  { product: "Tarik Tunai ATM Semua Bank", category: "EDC Mini ATM", admin: "Rp 6.500", fee: "Rp 300", status: "active" },
  { product: "Transfer Tunai Semua Bank", category: "EDC Mini ATM", admin: "Rp 6.500", fee: "Rp 300", status: "active" },
  { product: "Transfer ATM Semua Bank", category: "EDC Mini ATM", admin: "Rp 6.500", fee: "Rp 300", status: "active" },
  { product: "Cek Saldo Semua Bank", category: "EDC Mini ATM", admin: "Rp 4.000", fee: "Rp 300", status: "active" },
  { product: "*Bank Danamon", category: "EDC Mini ATM", admin: "Rp 7.500", fee: "Rp 300", status: "active" },
  { product: "Transfer Uang", category: "EDC Mini ATM", admin: "Rp 5.000", fee: "Rp 1.400", status: "active" },
  { product: "Transfer Virtual Account", category: "EDC Mini ATM", admin: "Rp 4.000", fee: "Rp 1.000", status: "active" },
  { product: "E Samsat Jabar (STNK)", category: "EDC Mini ATM", admin: "—", fee: "Rp 2.150", status: "active" },
  { product: "E Samsat Jateng (STNK)", category: "EDC Mini ATM", admin: "Rp 5.000", fee: "Rp 2.200", status: "active" },
  { product: "E Samsat Jatim (STNK)", category: "EDC Mini ATM", admin: "Rp 6.000", fee: "Rp 800", status: "active" },
  { product: "E Samsat Nasional (STNK)", category: "EDC Mini ATM", admin: "—", fee: "Rp 2.200", status: "active" },
  { product: "SIM Online", category: "EDC Mini ATM", admin: "—", fee: "Rp 1.750", status: "active" },
  { product: "BPJS Kesehatan", category: "EDC Mini ATM", admin: "Rp 2.500", fee: "Rp 1.250", status: "active" },
  { product: "BPJS Kesehatan Denda", category: "EDC Mini ATM", admin: "Rp 2.500", fee: "Rp 1.350", status: "active" },
  { product: "BPJS Ketenagakerjaan BPU", category: "EDC Mini ATM", admin: "Rp 2.500", fee: "Rp 900", status: "active" },
  { product: "PGN", category: "EDC Mini ATM", admin: "Rp 2.500", fee: "Rp 900", status: "active" },
  { product: "Pertagas Postpaid", category: "EDC Mini ATM", admin: "Rp 2.500", fee: "Rp 1.000", status: "active" },
  { product: "Pertagas Prepaid/Token", category: "EDC Mini ATM", admin: "Rp 3.000", fee: "Rp 800", status: "active" },

  // ──────────────────────────────────────
  // ONLINE SHOP
  // ──────────────────────────────────────
  { product: "Tokopedia", category: "Online Shop", admin: "Rp 2.500", fee: "Rp 1.100", status: "active" },
  { product: "Bukalapak", category: "Online Shop", admin: "Rp 3.000", fee: "Rp 1.300", status: "active" },
  { product: "Blibli", category: "Online Shop", admin: "—", fee: "Rp 1.300", status: "active" },
  { product: "MNC Shop", category: "Online Shop", admin: "Rp 5.500", fee: "Rp 1.800", status: "active" },
  { product: "Shopee", category: "Online Shop", admin: "—", fee: "—", status: "active" },

  // ──────────────────────────────────────
  // TELKOM & INTERNET
  // ──────────────────────────────────────
  { product: "Iconnet", category: "Telkom & Internet", admin: "Rp 3.500", fee: "Rp 1.000", status: "active" },
  { product: "Fix Line/PSTN/Telpon Rumah", category: "Telkom & Internet", admin: "Rp 3.000", fee: "Rp 1.100", status: "active" },
  { product: "Flexy Home", category: "Telkom & Internet", admin: "Rp 3.000", fee: "Rp 1.100", status: "active" },
  { product: "Speedy/Indihome", category: "Telkom & Internet", admin: "Rp 3.000", fee: "Rp 1.100", status: "active" },
  { product: "Telkom Vision", category: "Telkom & Internet", admin: "Rp 3.000", fee: "Rp 1.100", status: "active" },
  { product: "Megavision", category: "Telkom & Internet", admin: "Rp 3.000", fee: "Rp 1.300", status: "closed" },
  { product: "Topas TV Pascabayar", category: "Telkom & Internet", admin: "Rp 0", fee: "Rp 400", status: "closed" },
  { product: "Transvision", category: "Telkom & Internet", admin: "Rp 3.000", fee: "Rp 1.200", status: "active" },
  { product: "First Media", category: "Telkom & Internet", admin: "Rp 0", fee: "Rp 500", status: "active" },
  { product: "CBN", category: "Telkom & Internet", admin: "Rp 0", fee: "Rp 1.700", status: "closed" },
  { product: "XL Home Fiber", category: "Telkom & Internet", admin: "Rp 0", fee: "Rp 500", status: "active" },
  { product: "Oxygen", category: "Telkom & Internet", admin: "Rp 0", fee: "Rp 800", status: "active" },
  { product: "My Republic Retail", category: "Telkom & Internet", admin: "Rp 0", fee: "Rp 500", status: "active" },

  // ──────────────────────────────────────
  // TV KABEL
  // ──────────────────────────────────────
  { product: "Indovision", category: "TV Kabel", admin: "—", fee: "Rp 1.000", status: "active" },
  { product: "BigTV", category: "TV Kabel", admin: "—", fee: "Rp 1.100", status: "active" },
  { product: "K-Vision", category: "TV Kabel", admin: "—", fee: "Rp 1.700", status: "active" },
  { product: "Telkom Vision", category: "TV Kabel", admin: "—", fee: "Rp 1.100", status: "active" },

  // ──────────────────────────────────────
  // KARTU PASCABAYAR
  // ──────────────────────────────────────
  { product: "Kartu Halo", category: "Kartu Pascabayar", admin: "Rp 3.000", fee: "Rp 1.300", status: "active" },
  { product: "XL Xplore", category: "Kartu Pascabayar", admin: "Rp 2.500", fee: "Rp 2.000", status: "active" },
  { product: "Three Pascabayar", category: "Kartu Pascabayar", admin: "Rp 2.500", fee: "Rp 2.000", status: "active" },
  { product: "Smartfren Pascabayar", category: "Kartu Pascabayar", admin: "Rp 2.500", fee: "Rp 2.000", status: "active" },
  { product: "Indosat Matrix", category: "Kartu Pascabayar", admin: "Rp 2.500", fee: "Rp 2.000", status: "active" },
  { product: "Fren/Mobi Pascabayar", category: "Kartu Pascabayar", admin: "—", fee: "Rp 600", status: "active" },

  // ──────────────────────────────────────
  // MULTIFINANCE
  // ──────────────────────────────────────
  { product: "Woka Finance", category: "Multifinance", admin: "—", fee: "Rp 1.400", status: "active" },
  { product: "Smart Finance", category: "Multifinance", admin: "—", fee: "Rp 900", status: "active" },
  { product: "Radana Finance", category: "Multifinance", admin: "—", fee: "Rp 1.000", status: "active" },
  { product: "Mega Finance", category: "Multifinance", admin: "—", fee: "Rp 1.500", status: "active" },
  { product: "Home Credit Indonesia", category: "Multifinance", admin: "Rp 4.500", fee: "Rp 1.500", status: "active" },
  { product: "MCF", category: "Multifinance", admin: "—", fee: "Rp 1.500", status: "active" },
  { product: "MAF", category: "Multifinance", admin: "—", fee: "Rp 1.500", status: "active" },
  { product: "WOM Finance", category: "Multifinance", admin: "Rp 4.000", fee: "Rp 1.650", status: "active" },
  { product: "BAF", category: "Multifinance", admin: "Rp 7.000", fee: "Rp 1.550", status: "active" },
  { product: "FIF", category: "Multifinance", admin: "Rp 10.000", fee: "Rp 1.150", status: "active" },
  { product: "Adira Finance", category: "Multifinance", admin: "Rp 0", fee: "Rp 750", status: "active" },
  { product: "Bima Finance", category: "Multifinance", admin: "Rp 5.500", fee: "Rp 900", status: "active" },
  { product: "Mandala Finance", category: "Multifinance", admin: "—", fee: "Rp 1.700", status: "active" },
  { product: "NSC Finance", category: "Multifinance", admin: "—", fee: "Rp 1.100", status: "active" },
  { product: "BFI Finance", category: "Multifinance", admin: "Rp 0", fee: "Rp 350", status: "active" },
  { product: "ITC Finance", category: "Multifinance", admin: "Rp 5.000", fee: "Rp 1.300", status: "active" },
  { product: "OTO Finance", category: "Multifinance", admin: "Rp 0", fee: "Rp 750", status: "active" },
  { product: "Mandiri Utama Finance", category: "Multifinance", admin: "Rp 6.000", fee: "Rp 1.700", status: "active" },
  { product: "Artha Prima Finance", category: "Multifinance", admin: "Rp 5.500", fee: "Rp 1.700", status: "active" },
  { product: "Artha Asia Finance", category: "Multifinance", admin: "Rp 5.500", fee: "Rp 1.700", status: "active" },
  { product: "Suzuki Finance Adins", category: "Multifinance", admin: "Rp 4.400", fee: "Rp 1.300", status: "active" },
  { product: "SMS Finance", category: "Multifinance", admin: "Rp 6.050", fee: "Rp 2.700", status: "active" },
  { product: "BCA Multi Finance", category: "Multifinance", admin: "Rp 7.500", fee: "Rp 2.250", status: "active" },
  { product: "Aeon Finance", category: "Multifinance", admin: "Rp 7.100", fee: "Rp 1.700", status: "active" },

  // ──────────────────────────────────────
  // TIKET KERETA API DAN KAPAL LAUT
  // ──────────────────────────────────────
  { product: "Pembayaran Tiket KAI", category: "Tiket KAI & Kapal Laut", admin: "—", fee: "Rp 1.400", status: "active" },
  { product: "Pembelian Tiket KAI", category: "Tiket KAI & Kapal Laut", admin: "—", fee: "Rp 3.000", status: "active" },
  { product: "Tiket Kapal Pelni", category: "Tiket KAI & Kapal Laut", admin: "Rp 10.000", fee: "Rp 4.500", status: "active" },

  // ──────────────────────────────────────
  // PAJAK BUMI BANGUNAN (PBB)
  // ──────────────────────────────────────
  // DKI Jakarta
  { product: "PBB DKI Jakarta", category: "PBB", subcategory: "DKI Jakarta", admin: "Rp 5.000", fee: "Rp 2.250", status: "active" },

  // Jawa Barat
  { product: "PBB P-2 Kab. Bandung", category: "PBB", subcategory: "Jawa Barat", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB P-2 Kab. Bandung Barat", category: "PBB", subcategory: "Jawa Barat", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB P-2 Kab. Bekasi", category: "PBB", subcategory: "Jawa Barat", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB P-2 Kab. Bogor", category: "PBB", subcategory: "Jawa Barat", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB P-2 Kab. Ciamis", category: "PBB", subcategory: "Jawa Barat", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB P-2 Kab. Cianjur", category: "PBB", subcategory: "Jawa Barat", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB P-2 Kab. Cirebon", category: "PBB", subcategory: "Jawa Barat", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB P-2 Kab. Garut", category: "PBB", subcategory: "Jawa Barat", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB P-2 Kab. Indramayu", category: "PBB", subcategory: "Jawa Barat", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB P-2 Kab. Karawang", category: "PBB", subcategory: "Jawa Barat", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB P-2 Kab. Kuningan", category: "PBB", subcategory: "Jawa Barat", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB P-2 Kab. Lebak", category: "PBB", subcategory: "Jawa Barat", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB P-2 Kab. Majalengka", category: "PBB", subcategory: "Jawa Barat", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB P-2 Kab. Pangandaran", category: "PBB", subcategory: "Jawa Barat", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB P-2 Kab. Purwakarta", category: "PBB", subcategory: "Jawa Barat", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB P-2 Kab. Serang", category: "PBB", subcategory: "Jawa Barat", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB P-2 Kab. Subang", category: "PBB", subcategory: "Jawa Barat", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB P-2 Kab. Sukabumi", category: "PBB", subcategory: "Jawa Barat", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB P-2 Kab. Sumedang", category: "PBB", subcategory: "Jawa Barat", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB P-2 Kab. Tasikmalaya", category: "PBB", subcategory: "Jawa Barat", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB P-2 Kota Bandung", category: "PBB", subcategory: "Jawa Barat", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB P-2 Kota Banjar", category: "PBB", subcategory: "Jawa Barat", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB P-2 Kota Bekasi", category: "PBB", subcategory: "Jawa Barat", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB P-2 Kota Bogor", category: "PBB", subcategory: "Jawa Barat", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB P-2 Kota Cimahi", category: "PBB", subcategory: "Jawa Barat", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB P-2 Kota Cirebon", category: "PBB", subcategory: "Jawa Barat", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB P-2 Kota Depok", category: "PBB", subcategory: "Jawa Barat", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB P-2 Kota Serang", category: "PBB", subcategory: "Jawa Barat", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB P-2 Kota Sukabumi", category: "PBB", subcategory: "Jawa Barat", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB P-2 Kota Tangerang", category: "PBB", subcategory: "Jawa Barat", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB P-2 Kota Tangerang Selatan", category: "PBB", subcategory: "Jawa Barat", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB P-2 Kota Tasikmalaya", category: "PBB", subcategory: "Jawa Barat", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },

  // Jawa Tengah
  { product: "PBB Tegal Kota", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Klaten", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Jepara", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Karanganyar", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Cilacap", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Wonosobo", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Tegal Kab", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Pemalang", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Brebes", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Magelang Kota", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Magelang Kab", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Banyumas", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Boyolali", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Surakarta", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Kudus", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Sukoharjo", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Pati", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Kebumen", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Salatiga", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Kota Semarang", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Kota Pekalongan", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Kab Grobogan", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Kab Kendal", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Kab Sragen", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Kab Pekalongan", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Kab Wonogiri", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Kab Rembang", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Kab Blora", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Kab Demak", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Kab Temanggung", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Kab Semarang", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Kab Batang", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Kab Purbalingga", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Kab Banjarnegara", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Kab Purworejo", category: "PBB", subcategory: "Jawa Tengah", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },

  // Jawa Timur
  { product: "PBB Mojokerto", category: "PBB", subcategory: "Jawa Timur", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Sidoarjo", category: "PBB", subcategory: "Jawa Timur", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Kota Batu", category: "PBB", subcategory: "Jawa Timur", admin: "Rp 2.500", fee: "Rp 900", status: "active" },

  // DIY Yogyakarta
  { product: "PBB Kota Yogyakarta", category: "PBB", subcategory: "DIY Yogyakarta", admin: "Rp 5.000", fee: "Rp 2.250", status: "active" },
  { product: "PBB Kab Gunungkidul", category: "PBB", subcategory: "DIY Yogyakarta", admin: "Rp 3.500", fee: "Rp 1.750", status: "active" },
  { product: "PBB Kab Kulonprogo", category: "PBB", subcategory: "DIY Yogyakarta", admin: "Rp 5.000", fee: "Rp 2.250", status: "active" },
  { product: "PBB Kab Bantul", category: "PBB", subcategory: "DIY Yogyakarta", admin: "Rp 3.500", fee: "Rp 1.750", status: "active" },

  // Bali
  { product: "PBB Buleleng", category: "PBB", subcategory: "Bali", admin: "Rp 5.000", fee: "Rp 400", status: "active" },
  { product: "PBB Denpasar", category: "PBB", subcategory: "Bali", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Karangasem", category: "PBB", subcategory: "Bali", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Gianyar", category: "PBB", subcategory: "Bali", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Badung", category: "PBB", subcategory: "Bali", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Jembrana", category: "PBB", subcategory: "Bali", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Klungkung", category: "PBB", subcategory: "Bali", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Bangli", category: "PBB", subcategory: "Bali", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Tabanan", category: "PBB", subcategory: "Bali", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },

  // Sumatera Selatan
  { product: "PBB P-2 Kota Palembang", category: "PBB", subcategory: "Sumatera Selatan", admin: "Rp 3.500", fee: "Rp 2.350", status: "active" },
  { product: "PBB P-2 Kota Palembang", category: "PBB", subcategory: "Sumatera Selatan", admin: "Rp 5.000", fee: "Rp 2.550", status: "active" },
  { product: "PBB Kab. Banyuasin", category: "PBB", subcategory: "Sumatera Selatan", admin: "Rp 3.500", fee: "Rp 1.750", status: "active" },
  { product: "PBB Kab. OKU Induk", category: "PBB", subcategory: "Sumatera Selatan", admin: "Rp 3.500", fee: "Rp 1.750", status: "active" },
  { product: "PBB Kab. OKU Selatan", category: "PBB", subcategory: "Sumatera Selatan", admin: "Rp 3.500", fee: "Rp 1.750", status: "active" },
  { product: "PBB Kab. OKU Timur", category: "PBB", subcategory: "Sumatera Selatan", admin: "Rp 3.500", fee: "Rp 1.400", status: "active" },
  { product: "PBB Kab. Ogan Ilir", category: "PBB", subcategory: "Sumatera Selatan", admin: "Rp 3.500", fee: "Rp 1.750", status: "active" },
  { product: "PBB Kab. Musi Banyuasin", category: "PBB", subcategory: "Sumatera Selatan", admin: "Rp 3.500", fee: "Rp 1.750", status: "active" },
  { product: "PBB Kota Lubuk Linggau", category: "PBB", subcategory: "Sumatera Selatan", admin: "Rp 3.500", fee: "Rp 1.750", status: "active" },
  { product: "PBB Kota Prabumulih", category: "PBB", subcategory: "Sumatera Selatan", admin: "Rp 3.500", fee: "Rp 1.750", status: "active" },

  // Sumatera Utara
  { product: "PBB Kota Medan", category: "PBB", subcategory: "Sumatera Utara", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Kota Tebing Tinggi", category: "PBB", subcategory: "Sumatera Utara", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },
  { product: "PBB Kab Karo", category: "PBB", subcategory: "Sumatera Utara", admin: "Rp 5.000", fee: "Rp 1.750", status: "active" },

  // Riau
  { product: "PBB Pekanbaru Kota", category: "PBB", subcategory: "Riau", admin: "Rp 5.000", fee: "Rp 2.050", status: "active" },
  { product: "PBB Kab Dumai", category: "PBB", subcategory: "Riau", admin: "Rp 5.500", fee: "Rp 3.000", status: "active" },

  // ──────────────────────────────────────
  // VOUCHER & E-MONEY
  // ──────────────────────────────────────
  { product: "All Operator", category: "Voucher & E-Money", admin: "Diatur sendiri", fee: "Diatur sendiri", status: "diatur_sendiri" },
  { product: "Tap Cash BNI", category: "Voucher & E-Money", admin: "Diatur sendiri", fee: "Diatur sendiri", status: "diatur_sendiri" },
  { product: "E Money Mandiri", category: "Voucher & E-Money", admin: "Diatur sendiri", fee: "Diatur sendiri", status: "diatur_sendiri" },
  { product: "Gopay", category: "Voucher & E-Money", admin: "Diatur sendiri", fee: "Diatur sendiri", status: "diatur_sendiri" },
  { product: "OVO", category: "Voucher & E-Money", admin: "Diatur sendiri", fee: "Diatur sendiri", status: "diatur_sendiri" },
  { product: "Grab", category: "Voucher & E-Money", admin: "Diatur sendiri", fee: "Diatur sendiri", status: "diatur_sendiri" },
  { product: "Link Aja", category: "Voucher & E-Money", admin: "Diatur sendiri", fee: "Diatur sendiri", status: "diatur_sendiri" },
  { product: "Shopee Pay", category: "Voucher & E-Money", admin: "Diatur sendiri", fee: "Diatur sendiri", status: "diatur_sendiri" },
  { product: "Dana", category: "Voucher & E-Money", admin: "Diatur sendiri", fee: "Diatur sendiri", status: "diatur_sendiri" },

  // ──────────────────────────────────────
  // PDAM — DKI Jakarta
  // ──────────────────────────────────────
  { product: "Aetra Palyja", category: "PDAM", subcategory: "DKI Jakarta", admin: "Rp 3.000", fee: "Rp 800", status: "active" },

  // PDAM — Jawa Barat & Banten
  { product: "Kab Cirebon", category: "PDAM", subcategory: "Jawa Barat & Banten", admin: "Rp 3.000", fee: "Rp 1.200", status: "active" },
  { product: "Kab Garut", category: "PDAM", subcategory: "Jawa Barat & Banten", admin: "Rp 2.500", fee: "Rp 1.100", status: "active" },
  { product: "Kab Kuningan", category: "PDAM", subcategory: "Jawa Barat & Banten", admin: "Rp 2.500", fee: "Rp 1.100", status: "active" },
  { product: "Kab. Bandung", category: "PDAM", subcategory: "Jawa Barat & Banten", admin: "Rp 2.500", fee: "Rp 1.100", status: "active" },
  { product: "Kab. Bandung Barat", category: "PDAM", subcategory: "Jawa Barat & Banten", admin: "Rp 2.500", fee: "Rp 500", status: "active" },
  { product: "Kab. Bekasi", category: "PDAM", subcategory: "Jawa Barat & Banten", admin: "Rp 2.500", fee: "Rp 1.050", status: "active" },
  { product: "Kab. Bogor", category: "PDAM", subcategory: "Jawa Barat & Banten", admin: "Rp 2.500", fee: "Rp 900", status: "active" },
  { product: "Kab. Ciamis", category: "PDAM", subcategory: "Jawa Barat & Banten", admin: "Rp 2.500", fee: "Rp 800", status: "active" },
  { product: "Kab. Cianjur", category: "PDAM", subcategory: "Jawa Barat & Banten", admin: "Rp 2.500", fee: "Rp 1.100", status: "active" },
  { product: "Kab. Indramayu", category: "PDAM", subcategory: "Jawa Barat & Banten", admin: "Rp 2.500", fee: "Rp 1.100", status: "active" },
  { product: "Kab. Karawang", category: "PDAM", subcategory: "Jawa Barat & Banten", admin: "Rp 2.500", fee: "Rp 1.050", status: "active" },
  { product: "Kab. Majalengka", category: "PDAM", subcategory: "Jawa Barat & Banten", admin: "Rp 2.500", fee: "Rp 800", status: "active" },
  { product: "Kab. Pangandaran", category: "PDAM", subcategory: "Jawa Barat & Banten", admin: "Rp 2.500", fee: "Rp 1.000", status: "active" },
  { product: "Kab. Purwakarta", category: "PDAM", subcategory: "Jawa Barat & Banten", admin: "Rp 2.500", fee: "Rp 1.050", status: "active" },
  { product: "Kab. Subang", category: "PDAM", subcategory: "Jawa Barat & Banten", admin: "Rp 2.500", fee: "Rp 1.100", status: "active" },
  { product: "Kab. Sukabumi", category: "PDAM", subcategory: "Jawa Barat & Banten", admin: "Rp 2.500", fee: "Rp 775", status: "active" },
  { product: "Kab. Sukabumi", category: "PDAM", subcategory: "Jawa Barat & Banten", admin: "Rp 2.500", fee: "Rp 800", status: "active" },
  { product: "Kab. Sumedang", category: "PDAM", subcategory: "Jawa Barat & Banten", admin: "Rp 2.500", fee: "Rp 1.000", status: "active" },
  { product: "Kab. Sumedang", category: "PDAM", subcategory: "Jawa Barat & Banten", admin: "Rp 2.500", fee: "Rp 800", status: "active" },
  { product: "Kota Bandung", category: "PDAM", subcategory: "Jawa Barat & Banten", admin: "Rp 2.500", fee: "Rp 1.050", status: "active" },
  { product: "Kota Banjar", category: "PDAM", subcategory: "Jawa Barat & Banten", admin: "Rp 2.500", fee: "Rp 800", status: "active" },
  { product: "Kota Bekasi", category: "PDAM", subcategory: "Jawa Barat & Banten", admin: "Rp 2.500", fee: "Rp 800", status: "active" },
  { product: "Kota Bogor", category: "PDAM", subcategory: "Jawa Barat & Banten", admin: "Rp 2.500", fee: "Rp 1.100", status: "active" },
  { product: "Kota Cimahi", category: "PDAM", subcategory: "Jawa Barat & Banten", admin: "Rp 2.500", fee: "Rp 1.000", status: "active" },
  { product: "Kota Cirebon", category: "PDAM", subcategory: "Jawa Barat & Banten", admin: "Rp 2.500", fee: "Rp 700", status: "active" },
  { product: "Kota Depok", category: "PDAM", subcategory: "Jawa Barat & Banten", admin: "Rp 2.500", fee: "Rp 1.100", status: "active" },
  { product: "Kota Tasikmalaya", category: "PDAM", subcategory: "Jawa Barat & Banten", admin: "Rp 3.000", fee: "Rp 1.100", status: "active" },

  // PDAM — Banten
  { product: "Kab. Pandeglang", category: "PDAM", subcategory: "Banten", admin: "Rp 2.500", fee: "Rp 1.050", status: "active" },
  { product: "Kota Tangerang", category: "PDAM", subcategory: "Banten", admin: "Rp 3.000", fee: "Rp 1.250", status: "active" },
  { product: "Kab Serang", category: "PDAM", subcategory: "Banten", admin: "Rp 2.500", fee: "Rp 900", status: "active" },
  { product: "Kota Serang", category: "PDAM", subcategory: "Banten", admin: "Rp 2.500", fee: "Rp 900", status: "active" },
  { product: "Kota Cilegon", category: "PDAM", subcategory: "Banten", admin: "Rp 2.500", fee: "Rp 1.050", status: "active" },
  { product: "Kab. Cilegon", category: "PDAM", subcategory: "Banten", admin: "Rp 2.500", fee: "Rp 1.050", status: "active" },
  { product: "Tangerang Kab", category: "PDAM", subcategory: "Banten", admin: "Rp 2.500", fee: "Rp 1.000", status: "active" },
  { product: "Aetra Tangerang", category: "PDAM", subcategory: "Banten", admin: "Rp 2.500", fee: "Rp 900", status: "active" },

  // PDAM — Jawa Tengah
  { product: "Kab. Banjarnegara", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 3.000", fee: "Rp 1.200", status: "active" },
  { product: "Kab. Banyumas", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 2.500", fee: "Rp 1.100", status: "active" },
  { product: "Kab. Batang", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 2.500", fee: "Rp 900", status: "active" },
  { product: "Kab. Blora", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 2.500", fee: "Rp 1.450", status: "active" },
  { product: "Kab. Boyolali", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 2.000", fee: "Rp 650", status: "active" },
  { product: "Kab. Brebes", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 2.500", fee: "Rp 800", status: "active" },
  { product: "Kab. Cilacap", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 2.500", fee: "Rp 1.100", status: "active" },
  { product: "Kab. Demak", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 2.500", fee: "Rp 800", status: "active" },
  { product: "Kab. Grobogan", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 2.500", fee: "Rp 650", status: "active" },
  { product: "Kab. Jepara", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 3.000", fee: "Rp 1.000", status: "active" },
  { product: "Kab. Karanganyar", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 2.500", fee: "Rp 650", status: "active" },
  { product: "Kab. Kebumen", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 3.000", fee: "Rp 950", status: "active" },
  { product: "Kab. Kendal", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 1.500", fee: "Rp 700", status: "active" },
  { product: "Kab. Klaten", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 2.500", fee: "Rp 1.150", status: "active" },
  { product: "Kab. Kudus", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 2.000", fee: "Rp 725", status: "active" },
  { product: "Kab. Magelang", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 2.500", fee: "Rp 900", status: "active" },
  { product: "Kab. Pati", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 2.500", fee: "Rp 625", status: "active" },
  { product: "Kab. Pemalang", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 3.000", fee: "Rp 800", status: "active" },
  { product: "Kab. Pekalongan", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 2.500", fee: "Rp 800", status: "active" },
  { product: "Kab. Purbalingga", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 3.250", fee: "Rp 800", status: "active" },
  { product: "Kab. Purworejo", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 2.000", fee: "Rp 750", status: "active" },
  { product: "Kab. Rembang", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 2.500", fee: "Rp 800", status: "active" },
  { product: "Kab. Semarang", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 2.000", fee: "Rp 625", status: "active" },
  { product: "Kab. Solo", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 2.500", fee: "Rp 1.000", status: "active" },
  { product: "Kab. Sragen", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 2.000", fee: "Rp 1.100", status: "active" },
  { product: "Kab. Sukoharjo", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 2.000", fee: "Rp 625", status: "active" },
  { product: "Kab. Tegal", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 2.500", fee: "Rp 800", status: "active" },
  { product: "Kab. Temanggung", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 2.500", fee: "Rp 1.000", status: "active" },
  { product: "Kab. Wonogiri", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 2.500", fee: "Rp 1.100", status: "active" },
  { product: "Kab. Wonosobo", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 2.000", fee: "Rp 1.300", status: "active" },
  { product: "Kota Magelang", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 2.500", fee: "Rp 900", status: "active" },
  { product: "Kota Salatiga", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 2.500", fee: "Rp 800", status: "active" },
  { product: "Kota Pekalongan", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 2.000", fee: "Rp 500", status: "active" },
  { product: "Kota Semarang", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 4.300", fee: "Rp 1.200", status: "active" },
  { product: "Kota Surakarta/Solo", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 2.500", fee: "Rp 1.200", status: "active" },
  { product: "Kota Tegal", category: "PDAM", subcategory: "Jawa Tengah", admin: "Rp 2.500", fee: "Rp 800", status: "active" },

  // PDAM — Yogyakarta
  { product: "Kab. Bantul", category: "PDAM", subcategory: "Yogyakarta", admin: "Rp 2.300", fee: "Rp 1.000", status: "active" },
  { product: "Kab. Gunung Kidul", category: "PDAM", subcategory: "Yogyakarta", admin: "Rp 2.000", fee: "Rp 700", status: "active" },
  { product: "Kab. Kulonprogo", category: "PDAM", subcategory: "Yogyakarta", admin: "Rp 2.500", fee: "Rp 650", status: "active" },
  { product: "Kab. Sleman", category: "PDAM", subcategory: "Yogyakarta", admin: "Rp 2.000", fee: "Rp 800", status: "active" },
  { product: "Kota Yogyakarta", category: "PDAM", subcategory: "Yogyakarta", admin: "Rp 2.000", fee: "Rp 500", status: "active" },

  // PDAM — Jawa Timur
  { product: "Bangkalan Kab.", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 1.500", fee: "Rp 550", status: "active" },
  { product: "Banyuwangi Kab", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 2.500", fee: "Rp 700", status: "active" },
  { product: "Batu Kota", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 2.500", fee: "Rp 900", status: "active" },
  { product: "Blitar Kab", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 3.000", fee: "Rp 1.250", status: "active" },
  { product: "Blitar Kota", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 3.000", fee: "Rp 1.250", status: "active" },
  { product: "Bojonegoro Kab.", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 2.500", fee: "Rp 725", status: "active" },
  { product: "Bondowoso", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 0", fee: "Rp 475", status: "active" },
  { product: "Gresik", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 2.500", fee: "Rp 600", status: "active" },
  { product: "Jember Kab.", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 0", fee: "Rp 625", status: "active" },
  { product: "Jombang Kab", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 2.500", fee: "Rp 800", status: "active" },
  { product: "Kediri Kota", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 2.500", fee: "Rp 800", status: "active" },
  { product: "Kediri Kab", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 2.000", fee: "Rp 575", status: "active" },
  { product: "Lumajang Kab", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 2.500", fee: "Rp 900", status: "active" },
  { product: "Madiun Kota", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 2.000", fee: "Rp 600", status: "active" },
  { product: "Madiun Kab", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 2.500", fee: "Rp 900", status: "active" },
  { product: "Magetan Kab", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 2.500", fee: "Rp 900", status: "active" },
  { product: "Malang Kab", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 2.500", fee: "Rp 900", status: "active" },
  { product: "Malang Kota", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 2.500", fee: "Rp 1.050", status: "active" },
  { product: "Mojokerto Kab.", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 0", fee: "Rp 475", status: "active" },
  { product: "Ngawi", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 2.000", fee: "Rp 1.000", status: "active" },
  { product: "Pacitan", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 2.500", fee: "Rp 1.200", status: "active" },
  { product: "Pamekasan", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 3.000", fee: "Rp 775", status: "active" },
  { product: "Pasuruan Kab", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 2.500", fee: "Rp 775", status: "active" },
  { product: "Pasuruan Kota", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 2.500", fee: "Rp 750", status: "active" },
  { product: "Ponorogo Kab", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 2.500", fee: "Rp 800", status: "active" },
  { product: "Probolinggo Kab", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 2.500", fee: "Rp 800", status: "active" },
  { product: "Sampang", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 2.500", fee: "Rp 750", status: "active" },
  { product: "Sidoarjo Kab.", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 0", fee: "Rp 425", status: "active" },
  { product: "Situbondo", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 2.000", fee: "Rp 700", status: "active" },
  { product: "Sumenep Kab.", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 2.000", fee: "Rp 775", status: "active" },
  { product: "Surabaya Kota", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 0", fee: "Rp 725", status: "active" },
  { product: "Trenggalek", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 2.000", fee: "Rp 750", status: "active" },
  { product: "Tulungagung", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 2.000", fee: "Rp 1.000", status: "active" },
  { product: "Tuban", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 2.500", fee: "Rp 900", status: "active" },
  { product: "Lamongan", category: "PDAM", subcategory: "Jawa Timur", admin: "Rp 2.500", fee: "Rp 900", status: "active" },

  // PDAM — Bali
  { product: "Badung", category: "PDAM", subcategory: "Bali", admin: "Rp 2.500", fee: "Rp 1.200", status: "active" },
  { product: "Bangli", category: "PDAM", subcategory: "Bali", admin: "Rp 2.500", fee: "Rp 800", status: "active" },
  { product: "Buleleng", category: "PDAM", subcategory: "Bali", admin: "Rp 2.500", fee: "Rp 700", status: "active" },
  { product: "Denpasar", category: "PDAM", subcategory: "Bali", admin: "Rp 2.500", fee: "Rp 700", status: "active" },
  { product: "Gianyar", category: "PDAM", subcategory: "Bali", admin: "Rp 2.500", fee: "Rp 1.200", status: "active" },
  { product: "Jembrana", category: "PDAM", subcategory: "Bali", admin: "Rp 2.500", fee: "Rp 750", status: "active" },
  { product: "Klungkung", category: "PDAM", subcategory: "Bali", admin: "Rp 2.000", fee: "Rp 750", status: "active" },
  { product: "Tabanan", category: "PDAM", subcategory: "Bali", admin: "Rp 2.500", fee: "Rp 950", status: "active" },
  { product: "Karangasem", category: "PDAM", subcategory: "Bali", admin: "Rp 2.500", fee: "Rp 950", status: "active" },

  // PDAM — Sumatera
  { product: "Agam", category: "PDAM", subcategory: "Sumatera", admin: "Rp 2.500", fee: "Rp 1.050", status: "active" },
  { product: "Banyuasin", category: "PDAM", subcategory: "Sumatera", admin: "Rp 2.500", fee: "Rp 675", status: "active" },
  { product: "Binjai Kota", category: "PDAM", subcategory: "Sumatera", admin: "Rp 2.500", fee: "Rp 900", status: "active" },
  { product: "Bukittinggi", category: "PDAM", subcategory: "Sumatera", admin: "Rp 2.500", fee: "Rp 750", status: "active" },
  { product: "Deli Serdang", category: "PDAM", subcategory: "Sumatera", admin: "Rp 2.500", fee: "Rp 900", status: "active" },
  { product: "Lampung", category: "PDAM", subcategory: "Sumatera", admin: "Rp 2.800", fee: "Rp 925", status: "active" },
  { product: "Limapuluh Kota", category: "PDAM", subcategory: "Sumatera", admin: "Rp 2.500", fee: "Rp 750", status: "active" },
  { product: "Lubuk Linggau Kota", category: "PDAM", subcategory: "Sumatera", admin: "Rp 2.500", fee: "Rp 900", status: "active" },
  { product: "Manado Kota", category: "PDAM", subcategory: "Sumatera", admin: "Rp 2.500", fee: "Rp 1.200", status: "active" },
  { product: "Medan Kota", category: "PDAM", subcategory: "Sumatera", admin: "Rp 2.500", fee: "Rp 425", status: "active" },
  { product: "Muara Enim", category: "PDAM", subcategory: "Sumatera", admin: "Rp 2.500", fee: "Rp 900", status: "active" },
  { product: "Ogan Ilir", category: "PDAM", subcategory: "Sumatera", admin: "Rp 2.500", fee: "Rp 900", status: "active" },
  { product: "OKU Baturaja", category: "PDAM", subcategory: "Sumatera", admin: "Rp 2.500", fee: "Rp 575", status: "active" },
  { product: "OKU Selatan", category: "PDAM", subcategory: "Sumatera", admin: "Rp 2.500", fee: "Rp 900", status: "active" },
  { product: "Padang Kota", category: "PDAM", subcategory: "Sumatera", admin: "Rp 3.000", fee: "Rp 1.050", status: "active" },
  { product: "Padang Panjang Kota", category: "PDAM", subcategory: "Sumatera", admin: "Rp 2.700", fee: "Rp 950", status: "active" },
  { product: "Palembang ATS", category: "PDAM", subcategory: "Sumatera", admin: "Rp 2.500", fee: "Rp 700", status: "active" },
  { product: "Palembang Kota", category: "PDAM", subcategory: "Sumatera", admin: "Rp 2.500", fee: "Rp 1.050", status: "active" },
  { product: "Pariaman Kota", category: "PDAM", subcategory: "Sumatera", admin: "Rp 2.500", fee: "Rp 850", status: "active" },
  { product: "Pasaman", category: "PDAM", subcategory: "Sumatera", admin: "Rp 2.500", fee: "Rp 1.050", status: "active" },
  { product: "Prabumulih", category: "PDAM", subcategory: "Sumatera", admin: "Rp 2.500", fee: "Rp 475", status: "active" },
  { product: "Sawahlunto Kota", category: "PDAM", subcategory: "Sumatera", admin: "Rp 2.500", fee: "Rp 950", status: "active" },
  { product: "Sijunjung", category: "PDAM", subcategory: "Sumatera", admin: "Rp 2.500", fee: "Rp 1.050", status: "active" },
  { product: "Solok Kab", category: "PDAM", subcategory: "Sumatera", admin: "Rp 2.500", fee: "Rp 1.050", status: "active" },
  { product: "Solok Kota", category: "PDAM", subcategory: "Sumatera", admin: "Rp 2.500", fee: "Rp 1.050", status: "active" },
  { product: "Tanah Datar", category: "PDAM", subcategory: "Sumatera", admin: "Rp 2.500", fee: "Rp 850", status: "active" },
  { product: "Tirta Kepri", category: "PDAM", subcategory: "Sumatera", admin: "Rp 2.500", fee: "Rp 800", status: "active" },

  // PDAM — Kalimantan
  { product: "Balangan Kab", category: "PDAM", subcategory: "Kalimantan", admin: "Rp 1.500", fee: "Rp 500", status: "active" },
  { product: "Banjarmasin", category: "PDAM", subcategory: "Kalimantan", admin: "Rp 2.500", fee: "Rp 900", status: "active" },
  { product: "Balikpapan", category: "PDAM", subcategory: "Kalimantan", admin: "Rp 2.500", fee: "Rp 900", status: "active" },
  { product: "Hulu Sungai Utara", category: "PDAM", subcategory: "Kalimantan", admin: "Rp 3.000", fee: "Rp 550", status: "active" },
  { product: "Hulu Sungai Utara Amuntai", category: "PDAM", subcategory: "Kalimantan", admin: "Rp 3.000", fee: "Rp 550", status: "active" },
  { product: "Hulu Sungai Selatan", category: "PDAM", subcategory: "Kalimantan", admin: "Rp 2.500", fee: "Rp 900", status: "active" },
  { product: "Intan Banjar", category: "PDAM", subcategory: "Kalimantan", admin: "Rp 2.500", fee: "Rp 900", status: "active" },
  { product: "Tapin", category: "PDAM", subcategory: "Kalimantan", admin: "Rp 2.000", fee: "Rp 725", status: "active" },
  { product: "Kota Pontianak", category: "PDAM", subcategory: "Kalimantan", admin: "Rp 2.500", fee: "Rp 700", status: "active" },
  { product: "Samarinda", category: "PDAM", subcategory: "Kalimantan", admin: "Rp 2.500", fee: "Rp 900", status: "active" },
  { product: "Kutai Timur", category: "PDAM", subcategory: "Kalimantan", admin: "Rp 2.500", fee: "Rp 1.100", status: "active" },
  { product: "Tabalong", category: "PDAM", subcategory: "Kalimantan", admin: "Rp 2.500", fee: "Rp 900", status: "active" },
  { product: "Tanah Bumbu", category: "PDAM", subcategory: "Kalimantan", admin: "Rp 2.500", fee: "Rp 900", status: "active" },

  // PDAM — Aceh
  { product: "Kab. Aceh Barat", category: "PDAM", subcategory: "Aceh", admin: "Rp 2.500", fee: "Rp 800", status: "active" },
  { product: "Kab. Aceh Utara", category: "PDAM", subcategory: "Aceh", admin: "Rp 2.000", fee: "Rp 500", status: "active" },
  { product: "Banda Aceh", category: "PDAM", subcategory: "Aceh", admin: "Rp 2.000", fee: "Rp 500", status: "active" },
  { product: "Aceh Barat", category: "PDAM", subcategory: "Aceh", admin: "Rp 2.000", fee: "Rp 575", status: "active" },
  { product: "Aceh Besar", category: "PDAM", subcategory: "Aceh", admin: "Rp 2.000", fee: "Rp 500", status: "active" },
  { product: "Aceh Tamiang", category: "PDAM", subcategory: "Aceh", admin: "Rp 2.000", fee: "Rp 575", status: "active" },
  { product: "Sabang Kota", category: "PDAM", subcategory: "Aceh", admin: "Rp 2.500", fee: "Rp 1.100", status: "active" },

  // PDAM — NTB
  { product: "Mataram", category: "PDAM", subcategory: "NTB", admin: "Rp 2.500", fee: "Rp 1.100", status: "active" },
  { product: "Lombok Tengah", category: "PDAM", subcategory: "NTB", admin: "Rp 2.500", fee: "Rp 1.100", status: "active" },
  { product: "Lombok Timur", category: "PDAM", subcategory: "NTB", admin: "Rp 2.500", fee: "Rp 1.100", status: "active" },
  { product: "Lombok Utara", category: "PDAM", subcategory: "NTB", admin: "Rp 2.500", fee: "Rp 750", status: "active" },
  { product: "Sumbawa", category: "PDAM", subcategory: "NTB", admin: "Rp 2.500", fee: "Rp 650", status: "active" },
  { product: "Sumbawa Barat", category: "PDAM", subcategory: "NTB", admin: "Rp 2.500", fee: "Rp 1.000", status: "active" },
  { product: "Kota Bima", category: "PDAM", subcategory: "NTB", admin: "Rp 2.500", fee: "Rp 900", status: "active" },

  // PDAM — Sulawesi
  { product: "Bone", category: "PDAM", subcategory: "Sulawesi", admin: "Rp 2.500", fee: "Rp 1.000", status: "active" },
  { product: "Enrekang", category: "PDAM", subcategory: "Sulawesi", admin: "Rp 2.500", fee: "Rp 900", status: "active" },
  { product: "Gowa", category: "PDAM", subcategory: "Sulawesi", admin: "Rp 2.500", fee: "Rp 1.000", status: "active" },
  { product: "Kendari", category: "PDAM", subcategory: "Sulawesi", admin: "Rp 3.500", fee: "Rp 1.500", status: "active" },
  { product: "Luwu Kab", category: "PDAM", subcategory: "Sulawesi", admin: "Rp 2.500", fee: "Rp 1.100", status: "active" },
  { product: "Majene", category: "PDAM", subcategory: "Sulawesi", admin: "Rp 2.500", fee: "Rp 1.100", status: "active" },
  { product: "Makassar", category: "PDAM", subcategory: "Sulawesi", admin: "Rp 2.500", fee: "Rp 750", status: "active" },
  { product: "Mamuju", category: "PDAM", subcategory: "Sulawesi", admin: "Rp 2.500", fee: "Rp 850", status: "active" },
  { product: "Manado", category: "PDAM", subcategory: "Sulawesi", admin: "Rp 0", fee: "Rp 475", status: "active" },
  { product: "Palopo Kota", category: "PDAM", subcategory: "Sulawesi", admin: "Rp 2.500", fee: "Rp 1.000", status: "active" },
  { product: "Palu Donggala", category: "PDAM", subcategory: "Sulawesi", admin: "Rp 2.500", fee: "Rp 800", status: "active" },
  { product: "Palu Kota", category: "PDAM", subcategory: "Sulawesi", admin: "Rp 2.500", fee: "Rp 1.200", status: "active" },
  { product: "Pare-Pare", category: "PDAM", subcategory: "Sulawesi", admin: "Rp 2.500", fee: "Rp 1.100", status: "active" },
  { product: "Polewali Mandar", category: "PDAM", subcategory: "Sulawesi", admin: "Rp 2.500", fee: "Rp 1.200", status: "active" },
  { product: "Sidenreng Rappang", category: "PDAM", subcategory: "Sulawesi", admin: "Rp 2.500", fee: "Rp 1.100", status: "active" },
  { product: "Sinjai", category: "PDAM", subcategory: "Sulawesi", admin: "Rp 2.750", fee: "Rp 1.000", status: "active" },
  { product: "Wajo", category: "PDAM", subcategory: "Sulawesi", admin: "Rp 2.500", fee: "Rp 800", status: "active" },

  // PDAM — Kepulauan Riau
  { product: "ATB Batam", category: "PDAM", subcategory: "Kepulauan Riau", admin: "Rp 2.500", fee: "Rp 850", status: "active" },
  { product: "Tirta Kepri", category: "PDAM", subcategory: "Kepulauan Riau", admin: "Rp 2.500", fee: "Rp 800", status: "active" },

  // PDAM — Jambi
  { product: "Sorolangun", category: "PDAM", subcategory: "Jambi", admin: "Rp 2.500", fee: "Rp 900", status: "active" },

  // PDAM — Maluku
  { product: "Maluku Tengah", category: "PDAM", subcategory: "Maluku", admin: "Rp 2.500", fee: "Rp 1.100", status: "active" },

  // PDAM — NTT
  { product: "Sumba Timur", category: "PDAM", subcategory: "NTT", admin: "Rp 2.500", fee: "Rp 1.100", status: "active" },
];

export function getFeesByCategory(category: string): FeeItem[] {
  return feeItems.filter((item) => item.category === category);
}

export function getFeesBySubcategory(category: string, subcategory: string): FeeItem[] {
  return feeItems.filter(
    (item) => item.category === category && item.subcategory === subcategory
  );
}

export function getSubcategories(category: string): string[] {
  return [
    ...new Set(
      feeItems
        .filter((item) => item.category === category && item.subcategory)
        .map((item) => item.subcategory!)
    ),
  ];
}

export function getFeeCategories(): string[] {
  return [...new Set(feeItems.map((item) => item.category))];
}

export function searchFees(query: string): FeeItem[] {
  const q = query.toLowerCase();
  return feeItems.filter(
    (item) =>
      item.product.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      item.subcategory?.toLowerCase().includes(q)
  );
}

export const feeNotes = {
  minTransfer: "Fee minimal yang akan dikirim/ditransfer adalah Rp 10.000. Jika fee kurang dari Rp 10.000 akan ditunda/diakumulasikan ke bulan berikutnya.",
  paymentSchedule: "Fee bulanan dikirim tanggal 3-5.",
} as const;
