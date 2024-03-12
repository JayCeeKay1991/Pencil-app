--
-- PostgreSQL database dump
--

-- Dumped from database version 15.4
-- Dumped by pg_dump version 15.4

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

ALTER TABLE IF EXISTS ONLY "public"."Likes" DROP CONSTRAINT IF EXISTS "Likes_projectId_fkey";
ALTER TABLE IF EXISTS ONLY "public"."Likes" DROP CONSTRAINT IF EXISTS "Likes_artistId_fkey";
ALTER TABLE IF EXISTS ONLY "public"."Dislikes" DROP CONSTRAINT IF EXISTS "Dislikes_projectId_fkey";
ALTER TABLE IF EXISTS ONLY "public"."Dislikes" DROP CONSTRAINT IF EXISTS "Dislikes_artistId_fkey";
ALTER TABLE IF EXISTS ONLY "public"."Comments" DROP CONSTRAINT IF EXISTS "Comments_projectId_fkey";
ALTER TABLE IF EXISTS ONLY "public"."Comments" DROP CONSTRAINT IF EXISTS "Comments_artistId_fkey";
ALTER TABLE IF EXISTS ONLY "public"."Artists" DROP CONSTRAINT IF EXISTS "Artists_mainSkillId_fkey";
ALTER TABLE IF EXISTS ONLY "public"."Works" DROP CONSTRAINT IF EXISTS "Works_pkey";
ALTER TABLE IF EXISTS ONLY "public"."Skills" DROP CONSTRAINT IF EXISTS "Skills_pkey";
ALTER TABLE IF EXISTS ONLY "public"."Projects" DROP CONSTRAINT IF EXISTS "Projects_pkey";
ALTER TABLE IF EXISTS ONLY "public"."Locations" DROP CONSTRAINT IF EXISTS "Locations_pkey";
ALTER TABLE IF EXISTS ONLY "public"."Likes" DROP CONSTRAINT IF EXISTS "Likes_pkey";
ALTER TABLE IF EXISTS ONLY "public"."Dislikes" DROP CONSTRAINT IF EXISTS "Dislikes_pkey";
ALTER TABLE IF EXISTS ONLY "public"."Comments" DROP CONSTRAINT IF EXISTS "Comments_pkey";
ALTER TABLE IF EXISTS ONLY "public"."Artists" DROP CONSTRAINT IF EXISTS "Artists_pkey";
ALTER TABLE IF EXISTS "public"."Works" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."Skills" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."Projects" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."Locations" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."Likes" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."Dislikes" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."Comments" ALTER COLUMN "id" DROP DEFAULT;
ALTER TABLE IF EXISTS "public"."Artists" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE IF EXISTS "public"."Works_id_seq";
DROP TABLE IF EXISTS "public"."Works";
DROP SEQUENCE IF EXISTS "public"."Skills_id_seq";
DROP TABLE IF EXISTS "public"."Skills";
DROP SEQUENCE IF EXISTS "public"."Projects_id_seq";
DROP TABLE IF EXISTS "public"."Projects";
DROP SEQUENCE IF EXISTS "public"."Locations_id_seq";
DROP TABLE IF EXISTS "public"."Locations";
DROP SEQUENCE IF EXISTS "public"."Likes_id_seq";
DROP TABLE IF EXISTS "public"."Likes";
DROP SEQUENCE IF EXISTS "public"."Dislikes_id_seq";
DROP TABLE IF EXISTS "public"."Dislikes";
DROP SEQUENCE IF EXISTS "public"."Comments_id_seq";
DROP TABLE IF EXISTS "public"."Comments";
DROP SEQUENCE IF EXISTS "public"."Artists_id_seq";
DROP TABLE IF EXISTS "public"."Artists";
--
-- Name: SCHEMA "public"; Type: COMMENT; Schema: -; Owner: -
--

COMMENT ON SCHEMA "public" IS 'standard public schema';


SET default_tablespace = '';

SET default_table_access_method = "heap";

--
-- Name: Artists; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."Artists" (
    "id" integer NOT NULL,
    "name" character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "profileImg" character varying(255) NOT NULL,
    "rateAmount" double precision NOT NULL,
    "rateType" character varying(255) NOT NULL,
    "rateCurrency" character varying(255) NOT NULL,
    "mainSkillId" integer NOT NULL
);


--
-- Name: Artists_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."Artists_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: Artists_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."Artists_id_seq" OWNED BY "public"."Artists"."id";


--
-- Name: Comments; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."Comments" (
    "id" integer NOT NULL,
    "author" character varying(255) NOT NULL,
    "content" character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "artistId" integer,
    "projectId" integer
);


--
-- Name: Comments_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."Comments_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: Comments_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."Comments_id_seq" OWNED BY "public"."Comments"."id";


--
-- Name: Dislikes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."Dislikes" (
    "id" integer NOT NULL,
    "amount" integer DEFAULT 0,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "artistId" integer,
    "projectId" integer
);


--
-- Name: Dislikes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."Dislikes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: Dislikes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."Dislikes_id_seq" OWNED BY "public"."Dislikes"."id";


--
-- Name: Likes; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."Likes" (
    "id" integer NOT NULL,
    "amount" integer DEFAULT 0,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "artistId" integer,
    "projectId" integer
);


--
-- Name: Likes_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."Likes_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: Likes_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."Likes_id_seq" OWNED BY "public"."Likes"."id";


--
-- Name: Locations; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."Locations" (
    "id" integer NOT NULL,
    "name" character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


--
-- Name: Locations_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."Locations_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: Locations_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."Locations_id_seq" OWNED BY "public"."Locations"."id";


--
-- Name: Projects; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."Projects" (
    "id" integer NOT NULL,
    "name" character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "owner" character varying(255) NOT NULL,
    "description" character varying(255) NOT NULL,
    "startDate" timestamp with time zone NOT NULL,
    "endDate" timestamp with time zone NOT NULL,
    "thumbImage" character varying(255) NOT NULL
);


--
-- Name: Projects_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."Projects_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: Projects_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."Projects_id_seq" OWNED BY "public"."Projects"."id";


--
-- Name: Skills; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."Skills" (
    "id" integer NOT NULL,
    "name" character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL
);


--
-- Name: Skills_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."Skills_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: Skills_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."Skills_id_seq" OWNED BY "public"."Skills"."id";


--
-- Name: Works; Type: TABLE; Schema: public; Owner: -
--

CREATE TABLE "public"."Works" (
    "id" integer NOT NULL,
    "description" character varying(255) NOT NULL,
    "image" character varying(255) NOT NULL,
    "createdAt" timestamp with time zone NOT NULL,
    "updatedAt" timestamp with time zone NOT NULL,
    "ArtistId" integer NOT NULL
);


--
-- Name: Works_id_seq; Type: SEQUENCE; Schema: public; Owner: -
--

CREATE SEQUENCE "public"."Works_id_seq"
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


--
-- Name: Works_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: -
--

ALTER SEQUENCE "public"."Works_id_seq" OWNED BY "public"."Works"."id";


--
-- Name: Artists id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."Artists" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."Artists_id_seq"'::"regclass");


--
-- Name: Comments id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."Comments" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."Comments_id_seq"'::"regclass");


--
-- Name: Dislikes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."Dislikes" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."Dislikes_id_seq"'::"regclass");


--
-- Name: Likes id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."Likes" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."Likes_id_seq"'::"regclass");


--
-- Name: Locations id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."Locations" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."Locations_id_seq"'::"regclass");


--
-- Name: Projects id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."Projects" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."Projects_id_seq"'::"regclass");


--
-- Name: Skills id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."Skills" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."Skills_id_seq"'::"regclass");


--
-- Name: Works id; Type: DEFAULT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."Works" ALTER COLUMN "id" SET DEFAULT "nextval"('"public"."Works_id_seq"'::"regclass");


--
-- Data for Name: Artists; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."Artists" ("id", "name", "createdAt", "updatedAt", "profileImg", "rateAmount", "rateType", "rateCurrency", "mainSkillId") FROM stdin;
10	John martin	2024-03-11 18:33:50.389316+01	2024-03-11 18:33:50.389316+01	https://images.unsplash.com/photo-1615572359976-1fe39507ed7b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D	50	hour	$	1
11	Jane Smith	2024-03-11 18:33:50.389316+01	2024-03-11 18:33:50.389316+01	https://images.pexels.com/photos/7013617/pexels-photo-7013617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2	600	pd	$	1
12	Emily Chen	2024-03-11 18:33:50.389316+01	2024-03-11 18:33:50.389316+01	https://images.unsplash.com/photo-1621390798053-3e24c14ea5ce?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D	800	pd	$	7
13	Sophia Taylor	2024-03-11 18:33:50.389316+01	2024-03-11 18:33:50.389316+01	https://images.pexels.com/photos/5704849/pexels-photo-5704849.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2	700	pd	$	9
14	Daniel Wilson	2024-03-11 18:33:50.389316+01	2024-03-11 18:33:50.389316+01	https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2	550	pd	£	11
15	Olivia Martinez	2024-03-11 18:33:50.389316+01	2024-03-11 18:33:50.389316+01	https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&w=2550&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D	600	pd	€	13
16	Ethan Garcia	2024-03-11 18:33:50.389316+01	2024-03-11 18:33:50.389316+01	https://images.unsplash.com/photo-1507081323647-4d250478b919?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D	650	pd	€	15
17	Isabella Johnson	2024-03-11 18:33:50.389316+01	2024-03-11 18:33:50.389316+01	https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D	550	pd	€	17
18	Noah Brown	2024-03-11 18:33:50.389316+01	2024-03-11 18:33:50.389316+01	https://images.unsplash.com/photo-1570158268183-d296b2892211?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D	700	pd	SGD	25
\.


--
-- Data for Name: Comments; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."Comments" ("id", "author", "content", "createdAt", "updatedAt", "artistId", "projectId") FROM stdin;
\.


--
-- Data for Name: Dislikes; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."Dislikes" ("id", "amount", "createdAt", "updatedAt", "artistId", "projectId") FROM stdin;
\.


--
-- Data for Name: Likes; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."Likes" ("id", "amount", "createdAt", "updatedAt", "artistId", "projectId") FROM stdin;
\.


--
-- Data for Name: Locations; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."Locations" ("id", "name", "createdAt", "updatedAt") FROM stdin;
1	New York	2024-03-11 19:18:39.588695+01	2024-03-11 19:18:39.588695+01
2	Los Angeles	2024-03-11 19:18:39.588695+01	2024-03-11 19:18:39.588695+01
3	London	2024-03-11 19:18:39.588695+01	2024-03-11 19:18:39.588695+01
4	Paris	2024-03-11 19:18:39.588695+01	2024-03-11 19:18:39.588695+01
5	Berlin	2024-03-11 19:18:39.588695+01	2024-03-11 19:18:39.588695+01
6	Madrid	2024-03-11 19:18:39.588695+01	2024-03-11 19:18:39.588695+01
7	Singapore	2024-03-11 19:18:39.588695+01	2024-03-11 19:18:39.588695+01
8	Amsterdam	2024-03-11 19:18:39.588695+01	2024-03-11 19:18:39.588695+01
9	Tokyo	2024-03-11 19:18:39.588695+01	2024-03-11 19:18:39.588695+01
10	Seoul	2024-03-11 19:18:39.588695+01	2024-03-11 19:18:39.588695+01
\.


--
-- Data for Name: Projects; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."Projects" ("id", "name", "createdAt", "updatedAt", "owner", "description", "startDate", "endDate", "thumbImage") FROM stdin;
1	Apple TV commercial	2024-03-11 18:36:51.728167+01	2024-03-11 18:36:51.728167+01	user	apple advert	2024-03-20 23:26:00+01	2024-03-19 23:26:00+01	https://i.pinimg.com/564x/40/3b/9a/403b9ad670ccd9a572517da4ee6d6b24.jpg
2	adidas commercial	2024-03-11 18:36:51.728167+01	2024-03-11 18:36:51.728167+01	user	youtube video 2 minutes	2024-03-20 23:32:00+01	2024-03-17 23:32:00+01	https://i.pinimg.com/564x/c3/64/06/c3640698b94b372bfeee2b4ed769b7ec.jpg
3	coca-cola youtube ad	2024-03-11 18:36:51.728167+01	2024-03-11 18:36:51.728167+01	user	commercial for coca-cola 5min	2024-03-14 11:50:00+01	2024-03-18 12:45:00+01	https://i.pinimg.com/564x/68/9e/8f/689e8f52a985751bee127507b19c27bb.jpg
\.


--
-- Data for Name: Skills; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."Skills" ("id", "name", "createdAt", "updatedAt") FROM stdin;
1	Animation	2024-03-11 18:31:32.507382+01	2024-03-11 18:31:32.507382+01
2	motion graphics	2024-03-11 18:31:32.507382+01	2024-03-11 18:31:32.507382+01
3	Modelling	2024-03-11 18:31:32.507382+01	2024-03-11 18:31:32.507382+01
4	3d design	2024-03-11 18:31:32.507382+01	2024-03-11 18:31:32.507382+01
5	Rigging	2024-03-11 18:31:32.507382+01	2024-03-11 18:31:32.507382+01
6	3D Design	2024-03-11 18:31:32.507382+01	2024-03-11 18:31:32.507382+01
7	vfx	2024-03-11 18:31:32.507382+01	2024-03-11 18:31:32.507382+01
8	After effects	2024-03-11 18:31:32.507382+01	2024-03-11 18:31:32.507382+01
9	Photography	2024-03-11 18:31:32.507382+01	2024-03-11 18:31:32.507382+01
10	Videography	2024-03-11 18:31:32.507382+01	2024-03-11 18:31:32.507382+01
11	Editing	2024-03-11 18:31:32.507382+01	2024-03-11 18:31:32.507382+01
12	Copywriting	2024-03-11 18:31:32.507382+01	2024-03-11 18:31:32.507382+01
13	Social Media Management	2024-03-11 18:31:32.507382+01	2024-03-11 18:31:32.507382+01
14	SEO	2024-03-11 18:31:32.507382+01	2024-03-11 18:31:32.507382+01
15	Web Development	2024-03-11 18:31:32.507382+01	2024-03-11 18:31:32.507382+01
16	UX/UI Design	2024-03-11 18:31:32.507382+01	2024-03-11 18:31:32.507382+01
17	Content Creation	2024-03-11 18:31:32.507382+01	2024-03-11 18:31:32.507382+01
18	Data Analysis	2024-03-11 18:31:32.507382+01	2024-03-11 18:31:32.507382+01
19	Machine Learning	2024-03-11 18:31:32.507382+01	2024-03-11 18:31:32.507382+01
20	Python Programming	2024-03-11 18:31:32.507382+01	2024-03-11 18:31:32.507382+01
21	Digital Marketing	2024-03-11 18:31:32.507382+01	2024-03-11 18:31:32.507382+01
22	Content Strategy	2024-03-11 18:31:32.507382+01	2024-03-11 18:31:32.507382+01
23	Email Campaigns	2024-03-11 18:31:32.507382+01	2024-03-11 18:31:32.507382+01
24	Motion Graphics	2024-03-11 18:31:32.507382+01	2024-03-11 18:31:32.507382+01
25	Video Editing	2024-03-11 18:31:32.507382+01	2024-03-11 18:31:32.507382+01
26	Sound Design	2024-03-11 18:31:32.507382+01	2024-03-11 18:31:32.507382+01
27	Illustration	2024-03-11 18:31:32.507382+01	2024-03-11 18:31:32.507382+01
28	Concept Art	2024-03-11 18:31:32.507382+01	2024-03-11 18:31:32.507382+01
29	Character Design	2024-03-11 18:31:32.507382+01	2024-03-11 18:31:32.507382+01
30	Translation	2024-03-11 18:31:32.507382+01	2024-03-11 18:31:32.507382+01
31	Interpretation	2024-03-11 18:31:32.507382+01	2024-03-11 18:31:32.507382+01
32	Language Teaching	2024-03-11 18:31:32.507382+01	2024-03-11 18:31:32.507382+01
\.


--
-- Data for Name: Works; Type: TABLE DATA; Schema: public; Owner: -
--

COPY "public"."Works" ("id", "description", "image", "createdAt", "updatedAt", "ArtistId") FROM stdin;
1	One of the 3d renders I created for the Nike advert in 2020	https://i.pinimg.com/564x/53/0a/a4/530aa4425662d0fd641dec9f3a1dfc21.jpg	2024-03-12 09:22:25.31719+01	2024-03-12 09:22:25.31719+01	10
2	Renders for a Ford Motors commercial created in 2019. I provided the models and textures	https://images.pexels.com/photos/12939554/pexels-photo-12939554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2	2024-03-12 09:22:25.31719+01	2024-03-12 09:22:25.31719+01	10
3	Photoshoot for Vogue Magazine cover in 2023	https://i.pinimg.com/564x/30/41/04/3041043f6e50cc8776bd3bf9b4fa5caa.jpg	2024-03-12 09:22:25.31719+01	2024-03-12 09:22:25.31719+01	11
4	Logo design for a startup company in 2022	https://www.pexels.com/photo/green-palm-tree-near-white-and-black-dome-building-under-blue-sky-9002742/	2024-03-12 09:22:25.31719+01	2024-03-12 09:22:25.31719+01	11
5	A nice commercial made in collaboration with Builders Club	https://i.pinimg.com/564x/05/1a/b3/051ab3f57bc8f93592d0e3ece2f55bfc.jpg	2024-03-12 09:22:25.31719+01	2024-03-12 09:22:25.31719+01	12
6	Produced for Google Deepmind lab	https://i.pinimg.com/564x/5a/c2/43/5ac24386d82378a1a30b8ad89266ca16.jpg	2024-03-12 09:22:25.31719+01	2024-03-12 09:22:25.31719+01	12
7	Photographed a fashion campaign for a luxury brand in 2023	https://i.pinimg.com/564x/d1/c3/5b/d1c35bb24da17af65ff6b1412f254961.jpg	2024-03-12 09:22:25.31719+01	2024-03-12 09:22:25.31719+01	13
8	Captured behind-the-scenes footage for a music video in 2022	https://lh7-us.googleusercontent.com/2TT87v2XAuWiXZeG3f782eK_NUr3dZYrkhX3usW8gNPLpYfishODKQGUutTjEhjRYvtqFxfE8XeERtV_VTGMv_HBo_aBF6iXj8O4raSwPRiHCMguUocePh8lCp1L4wmqDPTtPpvPQ3FyUQ9bm86dNfE	2024-03-12 09:22:25.31719+01	2024-03-12 09:22:25.31719+01	13
\.


--
-- Name: Artists_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."Artists_id_seq"', 18, true);


--
-- Name: Comments_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."Comments_id_seq"', 1, false);


--
-- Name: Dislikes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."Dislikes_id_seq"', 1, false);


--
-- Name: Likes_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."Likes_id_seq"', 1, false);


--
-- Name: Locations_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."Locations_id_seq"', 10, true);


--
-- Name: Projects_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."Projects_id_seq"', 3, true);


--
-- Name: Skills_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."Skills_id_seq"', 32, true);


--
-- Name: Works_id_seq; Type: SEQUENCE SET; Schema: public; Owner: -
--

SELECT pg_catalog.setval('"public"."Works_id_seq"', 8, true);


--
-- Name: Artists Artists_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."Artists"
    ADD CONSTRAINT "Artists_pkey" PRIMARY KEY ("id");


--
-- Name: Comments Comments_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."Comments"
    ADD CONSTRAINT "Comments_pkey" PRIMARY KEY ("id");


--
-- Name: Dislikes Dislikes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."Dislikes"
    ADD CONSTRAINT "Dislikes_pkey" PRIMARY KEY ("id");


--
-- Name: Likes Likes_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."Likes"
    ADD CONSTRAINT "Likes_pkey" PRIMARY KEY ("id");


--
-- Name: Locations Locations_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."Locations"
    ADD CONSTRAINT "Locations_pkey" PRIMARY KEY ("id");


--
-- Name: Projects Projects_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."Projects"
    ADD CONSTRAINT "Projects_pkey" PRIMARY KEY ("id");


--
-- Name: Skills Skills_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."Skills"
    ADD CONSTRAINT "Skills_pkey" PRIMARY KEY ("id");


--
-- Name: Works Works_pkey; Type: CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."Works"
    ADD CONSTRAINT "Works_pkey" PRIMARY KEY ("id");


--
-- Name: Artists Artists_mainSkillId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."Artists"
    ADD CONSTRAINT "Artists_mainSkillId_fkey" FOREIGN KEY ("mainSkillId") REFERENCES "public"."Skills"("id");


--
-- Name: Comments Comments_artistId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."Comments"
    ADD CONSTRAINT "Comments_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "public"."Artists"("id") ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Comments Comments_projectId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."Comments"
    ADD CONSTRAINT "Comments_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "public"."Projects"("id") ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Dislikes Dislikes_artistId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."Dislikes"
    ADD CONSTRAINT "Dislikes_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "public"."Artists"("id") ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Dislikes Dislikes_projectId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."Dislikes"
    ADD CONSTRAINT "Dislikes_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "public"."Projects"("id") ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Likes Likes_artistId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."Likes"
    ADD CONSTRAINT "Likes_artistId_fkey" FOREIGN KEY ("artistId") REFERENCES "public"."Artists"("id") ON UPDATE CASCADE ON DELETE SET NULL;


--
-- Name: Likes Likes_projectId_fkey; Type: FK CONSTRAINT; Schema: public; Owner: -
--

ALTER TABLE ONLY "public"."Likes"
    ADD CONSTRAINT "Likes_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "public"."Projects"("id") ON UPDATE CASCADE ON DELETE SET NULL;


--
-- PostgreSQL database dump complete
--

