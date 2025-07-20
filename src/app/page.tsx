import { Button } from '@/components/button';
import {
  ClientCode,
  DownloadFileCode,
  UploadFileCode
} from '@/components/code-examples';
import { Tab, Tabs } from '@/components/tabs';
import { Check, Download, Upload } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const ListItem = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-center gap-2">
    <Check className="text-green-500 w-4 h-4" />
    <span className="text-xs font-bold">{children}</span>
  </div>
);

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      <section className="flex flex-col items-center justify-center">
        <p className="text-xl mt-2">
          A lightweight, simplified, self-hosted file storage solution{' '}
        </p>
        <p className="text-2xl font-bold">in a single file.</p>
      </section>
      <section className="flex flex-col items-center justify-center">
        <div className="w-full max-w-4xl relative">
          <Image
            src="/screenshot.webp"
            alt="Hero Image"
            className="rounded-lg shadow-lg object-cover transition-transform duration-300 hover:scale-105"
            width={960}
            height={540}
            priority
          />
          <div className="absolute inset-0 hover:bg-black/20 rounded-lg flex flex-col items-center justify-center transition-colors duration-300">
            <Link href="https://demo.perseusfs.dev/_" target="_blank">
              <Button>Live demo</Button>
            </Link>

            <div className="flex gap-2 text-xs text-black bg-zinc-800/10 p-2 rounded-lg mt-4 select-none">
              <span>
                Username: <strong>demo</strong>
              </span>
              <span>
                Password: <strong>demodemo</strong>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center justify-center">
        <div className="flex justify-around items-center rounded-3xl p-2 shadow-lg max-w-3xl w-full border border-zinc-200 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-900">
          <ListItem>Powered by Bun</ListItem>
          <ListItem>Dashboard</ListItem>
          <ListItem>Lightweight</ListItem>
          <ListItem>Self-hosted</ListItem>
          <ListItem>Open source</ListItem>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center">
        <p className="text-lg font-bold">
          Available for Linux, MacOS and Windows.
        </p>
      </section>
      <section>
        <Tabs>
          <Tab
            title="Upload file"
            icon={<Upload size="1rem" />}
            subtitle="Upload a file to a public bucket"
          >
            <UploadFileCode />
          </Tab>
          <Tab
            title="Download file"
            icon={<Download size="1rem" />}
            subtitle="Download a file from a public bucket"
          >
            <DownloadFileCode />
          </Tab>
          <Tab
            title="Javascript client"
            icon={<Download size="1rem" />}
            subtitle="Use the Javascript client to interact with your PerseusFS server"
          >
            <ClientCode />
          </Tab>
        </Tabs>
      </section>
    </div>
  );
}
